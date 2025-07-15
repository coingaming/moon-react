import path from "path";
import fs from "fs-extra";
import { COMPONENTS_META } from "../components-meta.js";

const copied: Set<string> = new Set();

const logger = {
  nonExistingComponent: (src: string, componentName: string) => {
    if (!fs.existsSync(src)) {
      console.error(`❌ '${componentName}' doesn't exist.`);
      process.exit(1);
    }
  },
  copiedComponent: (componentName: string, destPath: string) => {
    console.log(`✅ '${componentName}' copied to '${destPath}'`);
  },
};

async function copyComponent(
  componentName: string,
  baseDir: string,
  destDir: string
) {
  if (copied.has(componentName)) return;

  const src = path.join(baseDir, `${componentName}.tsx`);
  const dest = path.join(process.cwd(), destDir, `${componentName}.tsx`);

  logger.nonExistingComponent(src, componentName);

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
