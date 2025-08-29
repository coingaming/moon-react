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

  // Capitalize the component name for the file lookup
  const capitalizedName =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);

  // Try .tsx first, then .ts
  let src = path.join(baseDir, `${capitalizedName}.tsx`);
  let dest = path.join(process.cwd(), destDir, `${capitalizedName}.tsx`);

  if (!fs.existsSync(src)) {
    // Try .ts extension
    src = path.join(baseDir, `${componentName}.ts`);
    dest = path.join(process.cwd(), destDir, `${componentName}.ts`);

    if (!fs.existsSync(src)) {
      logger.nonExistingComponent(componentName);
      process.exit(1);
    }
  }

  await fs.ensureDir(path.dirname(dest));
  await fs.copy(src, dest);

  const extension = src.endsWith(".tsx") ? ".tsx" : ".ts";
  const fileName = src.endsWith(".tsx")
    ? `${capitalizedName}${extension}`
    : `${componentName}${extension}`;
  logger.copiedComponent(componentName, `${destDir}/${fileName}`);

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
