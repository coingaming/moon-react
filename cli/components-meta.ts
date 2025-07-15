import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../src"
);

type Deps = {
  deps: string[];
  internalDeps: string[];
};

export const COMPONENTS_META: Record<string, Deps> = {
  avatar: {
    deps: [],
    internalDeps: [
      path.resolve(path.join(__dirname, "helpers/index.js")),
      path.join(__dirname, "assets/icons/User.tsx"),
    ],
  },
  accordion: {
    deps: [],
    internalDeps: [path.resolve(path.join(__dirname, "helpers/index.js"))],
  },
  alert: {
    deps: ["clsx"],
    internalDeps: [],
  },
  authenticator: {
    deps: ["clsx"],
    internalDeps: [],
  },
  badge: {
    deps: [],
    internalDeps: [],
  },
  breadcrumb: {
    deps: ["clsx"],
    internalDeps: [],
  },
  button: {
    deps: ["clsx"],
    internalDeps: [],
  },
  carousel: {
    deps: [],
    internalDeps: ["button"],
  },
  select: { deps: ["clsx"], internalDeps: [] },
  checkbox: {
    deps: [],
    internalDeps: [],
  },
  dropdown: {
    deps: ["clsx"],
    internalDeps: ["popover"],
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
    internalDeps: ["button"],
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
};
