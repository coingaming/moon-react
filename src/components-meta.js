export const COMPONENTS_META = {
  alert: {
    deps: ["clsx"],
    internalDeps: [],
  },
  authenticator: {
    deps: ["input-otp", "lucide-react", "clsx"],
    internalDeps: [],
  },
  breadcrumb: {
    deps: ["@radix-ui/react-slot", "lucide-react", "clsx"],
    internalDeps: [],
  },
  button: {
    deps: ["@radix-ui/react-slot", "clsx"],
    internalDeps: [],
  },
  carousel: {
    deps: ["lucide-react"],
    internalDeps: ["button"],
  },
  checkbox: {
    deps: ["@radix-ui/react-checkbox", "lucide-react"],
    internalDeps: [],
  },
  dialog: {
    deps: ["@radix-ui/react-dialog", "lucide-react"],
    internalDeps: [],
  },
  dropdown: {
    deps: ["@radix-ui/react-dropdown-menu", "lucide-react", "clsx"],
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
  tabs: {
    deps: ["@radix-ui/react-tabs", "clsx"],
    internalDeps: [],
  },
  textarea: {
    deps: ["clsx"],
    internalDeps: [],
  },
};
