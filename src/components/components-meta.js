export const COMPONENTS_META = {
  alert: {
    deps: ["clsx", "@heathmont/moon-css"],
    internalDeps: [],
  },
  authenticator: {
    deps: ["input-otp", "lucide-react", "clsx", "@heathmont/moon-css"],
    internalDeps: [],
  },
  breadcrumb: {
    deps: [
      "@radix-ui/react-slot",
      "lucide-react",
      "clsx",
      "@heathmont/moon-css",
    ],
    internalDeps: [],
  },
  button: {
    deps: ["@radix-ui/react-slot", "clsx", "@heathmont/moon-css"],
    internalDeps: [],
  },
  carousel: {
    deps: ["lucide-react", "@heathmont/moon-css"],
    internalDeps: ["button"],
  },
  checkbox: {
    deps: ["@radix-ui/react-checkbox", "lucide-react", "@heathmont/moon-css"],
    internalDeps: [],
  },
  dialog: {
    deps: ["@radix-ui/react-dialog", "lucide-react", "@heathmont/moon-css"],
    internalDeps: [],
  },
  dropdown: {
    deps: [
      "@radix-ui/react-dropdown-menu",
      "lucide-react",
      "clsx",
      "@heathmont/moon-css",
    ],
    internalDeps: [],
  },
  input: {
    deps: ["clsx", "@heathmont/moon-css"],
    internalDeps: [],
  },
  table: {
    deps: ["clsx", "@heathmont/moon-css"],
    internalDeps: [],
  },
  pagination: {
    deps: ["clsx", "lucide-react", "@heathmont/moon-css"],
    internalDeps: ["button"],
  },
  tabs: {
    deps: ["@radix-ui/react-tabs", "clsx", "@heathmont/moon-css"],
    internalDeps: [],
  },
  textarea: {
    deps: ["clsx", "@heathmont/moon-css"],
    internalDeps: [],
  },
};
