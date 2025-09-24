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

const typesHelper = {
  name: "index",
  srcPath: path.resolve(path.join(__dirname, "types")),
  destPath: "src/types",
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
      typesHelper,
      {
        ...iconsData,
        name: "User",
      },
    ],
  },
  accordion: {
    internalDeps: [
      mergeClassesHelper,
      typesHelper,
      {
        ...iconsData,
        name: "ChevronDown",
      },
    ],
  },
  alert: {
    internalDeps: [
      mergeClassesHelper,
      typesHelper,
      {
        ...iconsData,
        name: "Close",
      },
    ],
  },
  authenticator: {
    internalDeps: [mergeClassesHelper, typesHelper],
  },
  badge: {
    internalDeps: [mergeClassesHelper, typesHelper],
  },
  breadcrumb: {
    internalDeps: [mergeClassesHelper],
  },
  button: {
    internalDeps: [mergeClassesHelper, typesHelper],
  },
  carousel: {
    internalDeps: [
      mergeClassesHelper,
      typesHelper,
      {
        ...componentsData,
        name: "button",
      },
      {
        ...iconsData,
        name: "ChevronLeft",
      },
      {
        ...iconsData,
        name: "ChevronRight",
      },
    ],
  },
  select: { internalDeps: [mergeClassesHelper, typesHelper] },
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
    internalDeps: [mergeClassesHelper, typesHelper],
  },
  "icon-button": {
    internalDeps: [
      mergeClassesHelper,
      typesHelper,
      {
        ...componentsData,
        name: "button",
      },
    ],
  },
  loader: {
    internalDeps: [mergeClassesHelper, typesHelper],
  },
  placeholder: {
    internalDeps: [mergeClassesHelper],
  },
  tag: {
    internalDeps: [mergeClassesHelper, typesHelper],
  },
  input: {
    internalDeps: [mergeClassesHelper, typesHelper],
  },
  table: {
    internalDeps: [mergeClassesHelper, typesHelper],
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
    internalDeps: [mergeClassesHelper, typesHelper],
  },
  textarea: {
    internalDeps: [mergeClassesHelper, typesHelper],
  },
  chip: { internalDeps: [mergeClassesHelper] },
  tooltip: {
    internalDeps: [mergeClassesHelper, typesHelper],
  },
  snackbar: {
    internalDeps: [mergeClassesHelper, typesHelper],
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
    internalDeps: [mergeClassesHelper, typesHelper],
  },
  radio: {
    internalDeps: [mergeClassesHelper],
  },
  "segmented-control": {
    internalDeps: [mergeClassesHelper],
  },
  menu: {
    internalDeps: [mergeClassesHelper, typesHelper],
  },
  "tab-list": {
    internalDeps: [mergeClassesHelper, typesHelper],
  },
};
