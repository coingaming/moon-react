#!/usr/bin/env node
import { fileURLToPath } from "url";
import path from "path";
import { COMPONENTS_META } from "./components-meta.js";
import { initMoonCss } from "./commands/add.js";

const ADD_COMMAND = "add";

const __dirname = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src/components"
);
const args = process.argv.slice(2);

if (args[0] === ADD_COMMAND && args.length > 1) {
  const components = args.filter((arg) =>
    Object.keys(COMPONENTS_META).includes(arg)
  );

  const addCommand = await import("./commands/add.js");
  const includeCss = args.includes("--with-css");

  const dirBase = path.resolve(__dirname);

  addCommand.default(components, dirBase);

  if (includeCss) {
    await initMoonCss();
  }
} else {
  console.log(
    `❌ Command no valid. use: npx @heathmont/moon-react add <component>`
  );
}
