#!/usr/bin/env node
import { fileURLToPath } from "url";
import path from "path";
import { COMPONENTS_META } from "../src/components-meta.js";
import { initMoonCss } from "./commands/add.js";

const ADD_COMMAND = "add";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);

if (args[0] === ADD_COMMAND && args.length > 1) {
  const components = args.filter((arg) =>
    Object.keys(COMPONENTS_META).includes(arg)
  );

  const addCommand = await import("./commands/add.js");
  const includeCss = args.includes("--with-css");

  addCommand.default(components, __dirname);

  if (includeCss) {
    await initMoonCss();
  }
} else {
  console.log(`❌ Command no valid. use: my-ui add <component>`);
}
