#!/usr/bin/env node
import { COMPONENTS_META } from "./components-meta.js";
import { filterArgs, initMoonCss, logger } from "./helpers.js";
import { DIRECTORIES } from "./directories-constants.js";

const addCommand = await import("./commands/add.js");

enum MOON_REACT_ARGS {
  ADD_COMPONENTS = "--add-components",
  ADD = "--add",
}

const args = process.argv.slice(2);
const hasAllComponentsFlag = args.find(
  (arg) => arg === MOON_REACT_ARGS.ADD_COMPONENTS
);

const addComponents = () => {
  if (hasAllComponentsFlag) {
    addCommand.default(Object.keys(COMPONENTS_META), DIRECTORIES.COMPONENTS);
  } else if (args[0] === MOON_REACT_ARGS.ADD && args.length > 1) {
    const components = args.filter(
      (arg) =>
        !arg.startsWith("--") && Object.keys(COMPONENTS_META).includes(arg)
    );

    if (!components.length) {
      logger.nonValidComponentsProvided();
      process.exit(1);
    }

    addCommand.default(components, DIRECTORIES.COMPONENTS);
  }
};

const main = () => {
  const filteredArgs = filterArgs(
    args.filter(
      (currentArg) =>
        !Object.values(MOON_REACT_ARGS).includes(currentArg as MOON_REACT_ARGS)
    )
  );

  initMoonCss(filteredArgs).then((response) => {
    if (response !== undefined) {
      addComponents();
    }
  });
};

main();
