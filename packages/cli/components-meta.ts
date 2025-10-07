import { DIRECTORIES } from "./directories-constants";

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
  srcPath: DIRECTORIES.TYPES,
  destPath: "src/types",
};

const mergeClassesHelper = {
  name: "mergeClasses",
  srcPath: DIRECTORIES.HELPERS,
  destPath: "src/helpers",
};

const componentsData: InternalDeps = {
  name: "",
  srcPath: DIRECTORIES.COMPONENTS,
  destPath: "src/components",
};

const iconsData: InternalDeps = {
  name: "",
  srcPath: DIRECTORIES.ICONS,
  destPath: "src/assets/icons",
};

const chevronLeftIcon: InternalDeps = {
  ...iconsData,
  name: "ChevronLeft",
};

const chevronRightIcon: InternalDeps = {
  ...iconsData,
  name: "ChevronRight",
};

const buttonComponent: InternalDeps = {
  ...componentsData,
  name: "button",
};

const closeIcon: InternalDeps = {
  ...iconsData,
  name: "Close",
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
    internalDeps: [mergeClassesHelper, typesHelper, closeIcon],
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
      buttonComponent,
      chevronLeftIcon,
      chevronRightIcon,
    ],
  },
  select: { internalDeps: [mergeClassesHelper, typesHelper] },
  circularProgress: {
    internalDeps: [mergeClassesHelper],
  },
  checkbox: {
    internalDeps: [mergeClassesHelper],
  },
  dropdown: {
    internalDeps: [mergeClassesHelper],
  },
  linearProgress: {
    internalDeps: [mergeClassesHelper, typesHelper],
  },
  iconButton: {
    internalDeps: [mergeClassesHelper, typesHelper, buttonComponent],
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
    internalDeps: [mergeClassesHelper, chevronLeftIcon, chevronRightIcon],
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
  bottomSheet: {
    internalDeps: [mergeClassesHelper, closeIcon],
  },
  drawer: {
    internalDeps: [mergeClassesHelper, closeIcon],
  },
  dialog: {
    internalDeps: [mergeClassesHelper, closeIcon],
  },
  list: {
    internalDeps: [mergeClassesHelper, typesHelper],
  },
  radio: {
    internalDeps: [mergeClassesHelper],
  },
  segmentedControl: {
    internalDeps: [mergeClassesHelper],
  },
  menu: {
    internalDeps: [mergeClassesHelper, typesHelper],
  },
  tabList: {
    internalDeps: [mergeClassesHelper, typesHelper],
  },
};
