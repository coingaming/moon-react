import path from "path";
import fs from "fs-extra";
import { execa } from "execa";
import { COMPONENTS_META } from "../components-meta.js";

const deps: Set<string> = new Set();
const copied: Set<string> = new Set();

async function copyComponent(componentName: string, baseDir: string) {
  if (copied.has(componentName)) return;

  const src = path.join(baseDir, `${componentName}.tsx`);
  const dest = path.join(
    process.cwd(),
    "src/components",
    `${componentName}.tsx`
  );

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
    await copyComponent(depName?.name, baseDir);
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

export default async function add(components: string[], baseDir: string) {
  const list = Array.isArray(components) ? components : [components];

  for (const componentName of list) {
    await copyComponent(componentName, baseDir);
  }

  await addExternalDependencies();
}
