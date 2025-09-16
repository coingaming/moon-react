import React, { createContext, useContext, useState } from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Variants, Contexts } from "../types";

export type SnackbarVariants = Extract<Variants, "fill" | "soft">;

type SnackbarContextType = {
  variant: SnackbarVariants;
  context: Contexts;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const SnackbarContext = createContext<SnackbarContextType | null>(null);

function useSnackbarContext() {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error(
      "Snackbar components must be used within <Snackbar> wrapper"
    );
  }
  return context;
}

type SnackbarProps = {
  children: React.ReactNode;
  variant?: SnackbarVariants;
  context?: Contexts;
};

const Trigger = ({ children }: { children: React.ReactNode }) => {
  const { setIsOpen } = useSnackbarContext();

  return <div onClick={() => setIsOpen(true)}>{children}</div>;
};

const Content = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & { children: React.ReactNode }) => {
  const { variant, context, isOpen, setIsOpen } = useSnackbarContext();

  if (!isOpen) return null;

  return (
    <div
      className={mergeClasses(
        "moon-snackbar",
        variant !== "fill" && `moon-snackbar-${variant}`,
        context !== "brand" && `moon-snackbar-${context}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const Action = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={mergeClasses("moon-snackbar-action", className)}>
      {children}
    </div>
  );
};

const Meta = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={mergeClasses("moon-snackbar-meta", className)}>
      {children}
    </div>
  );
};

const Root = ({
  children,
  variant = "fill",
  context = "brand",
}: SnackbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SnackbarContext.Provider value={{ variant, context, isOpen, setIsOpen }}>
      {children}
    </SnackbarContext.Provider>
  );
};

Root.displayName = "Snackbar";
Trigger.displayName = "Snackbar.Trigger";
Content.displayName = "Snackbar.Content";
Action.displayName = "Snackbar.Action";
Meta.displayName = "Snackbar.Meta";

const Snackbar = Object.assign(Root, { Trigger, Content, Action, Meta });

export default Snackbar;
