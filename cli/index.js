#!/usr/bin/env node
import { fileURLToPath } from "url";
import path from "path";

const ADD_COMMAND = "add";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);

if (args[0] === ADD_COMMAND && args[1]) {
  const component = args[1];
  const addCommand = await import("./commands/add.js");

  addCommand.default(component, __dirname);
} else {
  console.log(`❌ Command no valid. use: my-ui add <component>`);
}
