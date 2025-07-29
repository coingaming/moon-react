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
  deps: string[];
  internalDeps: InternalDeps[];
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
    deps: [],
    internalDeps: [
      mergeClassesHelper,
      {
        ...iconsData,
        name: "UserIcon",
      },
    ],
  },
  accordion: {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  alert: {
    deps: [],
    internalDeps: [
      mergeClassesHelper,
      {
        ...iconsData,
        name: "CloseIcon",
      },
    ],
  },
  authenticator: {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  badge: {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  breadcrumb: {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  button: {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  carousel: {
    deps: [],
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
  select: { deps: [], internalDeps: [mergeClassesHelper] },
  "circular-progress": {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  checkbox: {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  dropdown: {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  "linear-progress": {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  loader: {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  placeholder: {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  tag: {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  input: {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  table: {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  pagination: {
    deps: ["lucide-react"],
    internalDeps: [
      mergeClassesHelper,
      {
        ...componentsData,
        name: "button",
      },
    ],
  },
  switch: {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  textarea: {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  tooltip: {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  snackbar: {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  "bottom-sheet": {
    deps: [],
    internalDeps: [mergeClassesHelper, { ...iconsData, name: "CloseIcon" }],
  },
  drawer: {
    deps: [],
    internalDeps: [mergeClassesHelper, { ...iconsData, name: "CloseIcon" }],
  },
  dialog: {
    deps: [],
    internalDeps: [mergeClassesHelper, { ...iconsData, name: "CloseIcon" }],
  },
};
