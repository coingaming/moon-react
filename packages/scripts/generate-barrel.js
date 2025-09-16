#!/usr/bin/env node
/**
 * Generates optimal barrel file for tree shaking.
 * Creates: export { default as ComponentName } from "./ComponentName";
 * Plus: export { ComponentSizes, ComponentVariants } from "./ComponentName";
 */

const fs = require("fs");
const path = require("path");

const componentsDir = path.join(__dirname, "..", "src", "components");
const indexFile = path.join(componentsDir, "index.ts");

if (!fs.existsSync(componentsDir)) {
  console.error("Components directory not found:", componentsDir);
  process.exit(1);
}

// Get all .tsx files (components)
const componentFiles = fs
  .readdirSync(componentsDir)
  .filter((f) => f.endsWith(".tsx"))
  .filter((f) => !/(\.test|\.spec|\.stories)\.(tsx?)$/.test(f))
  .sort();

// Function to extract exported types from a component file
function getExportedTypes(filePath, componentName) {
  const content = fs.readFileSync(filePath, "utf8");
  const exports = [];

  // Look for exported types that match component patterns
  const typePatterns = [`${componentName}Sizes`, `${componentName}Variants`];

  typePatterns.forEach((typeName) => {
    const regex = new RegExp(
      `export\\s+(type\\s+)?.*${typeName.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      )}`,
      "m"
    );
    if (regex.test(content)) {
      exports.push(typeName);
    }
  });

  // Also look for specifically exported subcomponents like AlertTitle
  const subComponentPattern = new RegExp(
    `export\\s+{.*${componentName}\\w+.*}`,
    "g"
  );
  const subCompMatch = content.match(subComponentPattern);
  if (subCompMatch) {
    subCompMatch.forEach((match) => {
      const componentMatch = match.match(
        new RegExp(`(${componentName}\\w+)`, "g")
      );
      if (componentMatch) {
        exports.push(...componentMatch);
      }
    });
  }

  console.log(`${componentName}: found types [${exports.join(", ")}]`);
  return exports;
}

// Generate header
const header = [
  "/**",
  " * @file Auto-generated barrel optimized for tree shaking.",
  " * Run: npm run barrels",
  " */",
  "",
  'export * from "../types";',
  "",
].join("\n");

// Generate exports
const exportLines = [];
componentFiles.forEach((file) => {
  const componentName = path.basename(file, ".tsx");
  const filePath = path.join(componentsDir, file);

  // Export default as named (for component usage)
  exportLines.push(
    `export { default as ${componentName} } from "./${componentName}";`
  );

  // Export specific types (for Storybook, but tree-shakeable)
  const types = getExportedTypes(filePath, componentName);
  if (types.length > 0) {
    exportLines.push(
      `export type { ${types.join(", ")} } from "./${componentName}";`
    );
  }
});

const content = header + exportLines.join("\n") + "\n";

fs.writeFileSync(indexFile, content);
console.log(
  `✅ Generated barrel with ${componentFiles.length} components and their types`
);
