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
    internalDeps: [mergeClassesHelper],
  },
  authenticator: {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  badge: {
    deps: [],
    internalDeps: [],
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
  select: { deps: ["clsx"], internalDeps: [] },
  checkbox: {
    deps: [],
    internalDeps: [],
  },
  dropdown: {
    deps: [],
    internalDeps: [mergeClassesHelper],
  },
  "linear-progress": {
    deps: ["clsx"],
    internalDeps: [],
  },
  input: {
    deps: ["clsx"],
    internalDeps: [],
  },
  table: {
    deps: ["clsx"],
    internalDeps: [],
  },
  pagination: {
    deps: ["clsx", "lucide-react"],
    internalDeps: [
      {
        ...componentsData,
        name: "button",
      },
    ],
  },
  switch: {
    deps: ["clsx"],
    internalDeps: [],
  },
  textarea: {
    deps: ["clsx"],
    internalDeps: [],
  },
  tooltip: {
    deps: ["clsx"],
    internalDeps: [],
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
