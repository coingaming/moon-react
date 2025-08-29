import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../src"
);

type InternalDeps = {
  name: string;
  srcPath: string;
  destPath: string;
};

type Deps = {
  internalDeps: InternalDeps[];
};

const constantsHelper = {
  name: "contexts",
  srcPath: path.resolve(path.join(__dirname, "constants")),
  destPath: "src/constants",
};

const mergeClassesHelper = {
  name: "mergeClasses",
  srcPath: path.resolve(path.join(__dirname, "helpers")),
  destPath: "src/helpers",
};

const componentsData: InternalDeps = {
  name: "",
  srcPath: path.resolve(path.join(__dirname, "components")),
  destPath: "src/components",
};

const iconsData: InternalDeps = {
  name: "",
  srcPath: path.join(__dirname, "assets/icons"),
  destPath: "src/assets/icons",
};

export const COMPONENTS_META: Record<string, Deps> = {
  avatar: {
    internalDeps: [
      mergeClassesHelper,
      {
        ...iconsData,
        name: "UserIcon",
      },
    ],
  },
  accordion: {
    internalDeps: [mergeClassesHelper],
  },
  alert: {
    internalDeps: [
      mergeClassesHelper,
      constantsHelper,
      {
        ...iconsData,
        name: "CloseIcon",
      },
    ],
  },
  authenticator: {
    internalDeps: [mergeClassesHelper],
  },
  badge: {
    internalDeps: [mergeClassesHelper, constantsHelper],
  },
  breadcrumb: {
    internalDeps: [mergeClassesHelper],
  },
  button: {
    internalDeps: [mergeClassesHelper, constantsHelper],
  },
  carousel: {
    internalDeps: [
      {
        ...componentsData,
        name: "button",
      },
      {
        ...iconsData,
        name: "ArrowLeftIcon",
      },
      {
        ...iconsData,
        name: "ArrowRightIcon",
      },
    ],
  },
  select: { internalDeps: [mergeClassesHelper] },
  "circular-progress": {
    internalDeps: [mergeClassesHelper],
  },
  checkbox: {
    internalDeps: [mergeClassesHelper],
  },
  dropdown: {
    internalDeps: [mergeClassesHelper],
  },
  "linear-progress": {
    internalDeps: [mergeClassesHelper],
  },
  "icon-button": {
    internalDeps: [
      mergeClassesHelper,
      constantsHelper,
      {
        ...componentsData,
        name: "button",
      },
    ],
  },
  loader: {
    internalDeps: [mergeClassesHelper],
  },
  placeholder: {
    internalDeps: [mergeClassesHelper],
  },
  tag: {
    internalDeps: [mergeClassesHelper],
  },
  input: {
    internalDeps: [mergeClassesHelper],
  },
  table: {
    internalDeps: [mergeClassesHelper],
  },
  pagination: {
    internalDeps: [
      mergeClassesHelper,
      {
        ...iconsData,
        name: "ArrowLeftIcon",
      },
      {
        ...iconsData,
        name: "ArrowRightIcon",
      },
    ],
  },
  switch: {
    internalDeps: [mergeClassesHelper],
  },
  textarea: {
    internalDeps: [mergeClassesHelper],
  },
  chip: { internalDeps: [mergeClassesHelper] },
  tooltip: {
    internalDeps: [mergeClassesHelper],
  },
  snackbar: {
    internalDeps: [mergeClassesHelper, constantsHelper],
  },
  "bottom-sheet": {
    internalDeps: [mergeClassesHelper, { ...iconsData, name: "CloseIcon" }],
  },
  drawer: {
    internalDeps: [mergeClassesHelper, { ...iconsData, name: "CloseIcon" }],
  },
  dialog: {
    internalDeps: [mergeClassesHelper, { ...iconsData, name: "CloseIcon" }],
  },
  list: {
    internalDeps: [mergeClassesHelper],
  },
  radio: {
    internalDeps: [mergeClassesHelper],
  },
  "segmented-control": {
    internalDeps: [mergeClassesHelper],
  },
  menu: {
    internalDeps: [mergeClassesHelper],
  },
  tabs: {
    internalDeps: [mergeClassesHelper],
  },
};
