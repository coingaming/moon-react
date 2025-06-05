import path from "path";
import fs from "fs-extra";
import { execa } from "execa";
import { COMPONENTS_META } from "../../src/components/components-meta.js";
import { fileURLToPath } from "url";

const deps = new Set();
const copied = new Set();

const MOON_CSS_PACKAGE = "@heathmont/moon-css";
const MOON_CSS_COMPONENTS_FILE = "dist/_components.css";
const MOON_CSS_COMPONENTS_DIST = "assets/css/_components.css";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function copyCssFile(sourcePath, targetPath, label) {
  if (!fs.existsSync(sourcePath)) {
    console.error(`❌ ${label} file not found: ${sourcePath}`);
    process.exit(1);
  }

  await fs.ensureDir(path.dirname(targetPath));
  await fs.copyFile(sourcePath, targetPath);
  console.log(`✅ ${label} copied to '${targetPath}'`);
}

async function initMoonCss() {
  const clientRoot = process.cwd();
  const moonReactRoot = path.resolve(__dirname, "../..");
  const moonCssPath = path.join(clientRoot, "node_modules", MOON_CSS_PACKAGE);
  const targetComponentsCss = path.join(clientRoot, MOON_CSS_COMPONENTS_DIST);

  try {
    await execa("npx", [MOON_CSS_PACKAGE, "--with-components"], {
      stdio: "inherit",
    });
  } catch (err) {
    console.error("❌ Failed to install Moon CSS package:", err);
    process.exit(1);
  }

  const sourceComponentsCss = path.join(moonCssPath, MOON_CSS_COMPONENTS_FILE);
  const sourceMoonComponentsCss = path.join(
    moonReactRoot,
    "assets/css/moon-components.css"
  );
  const targetMoonComponentsCss = path.join(
    clientRoot,
    "assets/css/moon-components.css"
  );

  await copyCssFile(
    sourceComponentsCss,
    targetComponentsCss,
    "_components.css"
  );
  await copyCssFile(
    sourceMoonComponentsCss,
    targetMoonComponentsCss,
    "moon-components.css"
  );
}

async function copyComponent(componentName, baseDir) {
  if (copied.has(componentName)) return;

  const src = path.join(baseDir, "../src/components/", `${componentName}.tsx`);
  const dest = path.join(process.cwd(), "components", `${componentName}.tsx`);

  if (!fs.existsSync(src)) {
    console.error(`❌ Component '${componentName}' doesn't exist.`);
    process.exit(1);
  }

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

async function addExternalDependencies() {
  const pkgPath = path.join(process.cwd(), "package.json");
  const pkg = await fs.readJson(pkgPath);
  const installed = {
    ...pkg.dependencies,
    ...pkg.devDependencies,
  };

  for (const name of copied) {
    COMPONENTS_META[name]?.deps?.forEach((dep) => {
      if (!installed[dep]) {
        deps.add(dep);
      }
    });
  }

  if (deps.size === 0) return;

  const depsList = Array.from(deps);
  console.log(`📦 Installing new dependencies: ${depsList.join(", ")}`);

  try {
    await execa("yarn", ["add", ...depsList], { stdio: "inherit" });
  } catch (err) {
    console.error("❌ Failed to install dependencies:", err);
    process.exit(1);
  }
}

export default async function add(components, baseDir) {
  const list = Array.isArray(components) ? components : [components];

  for (const componentName of list) {
    await copyComponent(componentName, baseDir);
  }

  await addExternalDependencies();
  await initMoonCss();
}
