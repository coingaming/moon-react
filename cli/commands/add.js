import path from "path";
import fs from "fs-extra";
import { COMPONENTS_META } from "../../src/components/components-meta.js";
import { execSync } from "child_process";

const deps = new Set();
const copied = new Set();

const MOON_CSS_PACKAGE = "@heathmont/moon-css";
const MOON_CSS_COMPONENTS_FILE = "dist/_components.css";
const MOON_CSS_COMPONENTS_DIST = "assets/css/moon-components.css";

async function initMoonCss() {
  const destPath = path.join(process.cwd(), MOON_CSS_COMPONENTS_DIST);

  if (fs.existsSync(destPath)) {
    console.log(
      `🎨 CSS already exists at ${MOON_CSS_COMPONENTS_DIST} — skipping.`
    );
    return;
  }

  console.log(`📦 Installing CSS package '${MOON_CSS_PACKAGE}'...`);
  execSync(`npx @heathmont/moon-css --with-components`, { stdio: "inherit" });

  const pkgCssPath = path.join(
    process.cwd(),
    "node_modules",
    MOON_CSS_PACKAGE,
    MOON_CSS_COMPONENTS_FILE
  );

  if (!fs.existsSync(pkgCssPath)) {
    console.error(`❌ CSS file not found in package: ${pkgCssPath}`);
    process.exit(1);
  }

  await fs.ensureDir(path.dirname(destPath));
  await fs.copyFile(pkgCssPath, destPath);

  console.log(
    `✅ CSS copied from '${MOON_CSS_PACKAGE}' to '${MOON_CSS_COMPONENTS_DIST}'`
  );
}

async function copyComponent(componentName, baseDir) {
  if (copied.has(componentName)) return;

  const src = path.join(baseDir, "../src/components/", `${componentName}.tsx`);

  if (!fs.existsSync(src)) {
    console.error(`❌ Component '${componentName}' doesn't exist.`);
    process.exit(1);
  }

  const dest = path.join(process.cwd(), "components", `${componentName}.tsx`);

  await fs.ensureDir(path.dirname(dest));
  await fs.copy(src, dest);

  console.log(
    `✅ Component '${componentName}' copied to 'components/${componentName}.tsx'`
  );

  copied.add(componentName);

  const meta = COMPONENTS_META[componentName];

  if (!meta?.internalDeps?.length) {
    return;
  }

  for (const depName of meta.internalDeps) {
    await copyComponent(depName, baseDir);
  }
}

function addExternalDependencies() {
  for (const name of copied) {
    COMPONENTS_META[name]?.deps?.forEach((dependency) => {
      deps.add(dependency);
    });
  }

  if (deps.size === 0) {
    return;
  }

  const depsList = Array.from(deps);

  console.log(`📦 Installing dependencies: ${depsList.join(", ")}`);
  execSync(`yarn add ${depsList.join(" ")}`, { stdio: "inherit" });
}

export default async function add(componentName, baseDir) {
  await copyComponent(componentName, baseDir);
  addExternalDependencies();

  await initMoonCss();
}
