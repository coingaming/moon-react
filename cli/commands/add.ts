import path from "path";
import fs from "fs-extra";
import { COMPONENTS_META } from "../components-meta.js";
import { logger } from "../helpers.js";

const copied: Set<string> = new Set();

async function copyComponent(
  componentName: string,
  baseDir: string,
  destDir: string
) {
  if (copied.has(componentName)) return;

  const src = path.join(baseDir, `${componentName}.tsx`);
  const dest = path.join(process.cwd(), destDir, `${componentName}.tsx`);

  if (!fs.existsSync(src)) {
    logger.nonExistingComponent(componentName);
    process.exit(1);
  }

  await fs.ensureDir(path.dirname(dest));
  await fs.copy(src, dest);

  logger.copiedComponent(componentName, `${destDir}/${componentName}.tsx`);

  copied.add(componentName);

  const meta = COMPONENTS_META[componentName];

  if (!meta?.internalDeps?.length) {
    return;
  }

  for (const dep of meta.internalDeps) {
    await copyComponent(dep.name, dep.srcPath, dep.destPath);
  }
}

export default async function add(components: string[], baseDir: string) {
  const list = Array.isArray(components) ? components : [components];

  for (const componentName of list) {
    await copyComponent(componentName, baseDir, "src/components");
  }
}
