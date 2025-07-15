#!/usr/bin/env node
import { fileURLToPath } from "url";
import path from "path";
import { COMPONENTS_META } from "./components-meta.js";
import { initMoonCss } from "./helpers.js";
const addCommand = await import("./commands/add.js");

const args = process.argv.slice(2);

const cssConfigIndex = args.findIndex((arg) => arg === "--css-path");
const cssPath = cssConfigIndex !== -1 ? args[cssConfigIndex + 1] : null;
const hasAllComponentsFlag = args.find((arg) => arg === "--all-components");

const addComponents = () => {
  const __dirname = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "../../src/components"
  );
  const dirBase = path.resolve(__dirname);
  const ADD_COMMAND = "add";

  if (hasAllComponentsFlag) {
    addCommand.default(Object.keys(COMPONENTS_META), dirBase);
  } else if (args[0] === ADD_COMMAND && args.length > 1) {
    const components = args.filter(
      (arg) =>
        !arg.startsWith("--") && Object.keys(COMPONENTS_META).includes(arg)
    );

    if (!components.length) {
      console.log(`❌ No valid components provided.`);
      process.exit(1);
    }

    addCommand.default(components, dirBase);
  }
};

initMoonCss(cssPath).then((response) => {
  if (response !== undefined) {
    addComponents();
  }
});
