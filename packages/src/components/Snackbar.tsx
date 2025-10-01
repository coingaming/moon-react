import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Variants, Contexts } from "../types";

export type SnackbarVariants = Extract<Variants, "fill" | "soft">;

type SnackbarProps = {
  isOpen: boolean;
  children: React.ReactNode;
  variant?: SnackbarVariants;
  context?: Contexts;
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

const Group = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={mergeClasses("moon-snackbar-group", className)}>
      {children}
    </div>
  );
};

const Root = ({
  isOpen,
  children,
  variant = "fill",
  context = "brand",
}: SnackbarProps) => {
  return (
    isOpen && (
      <div
        className={mergeClasses(
          "moon-snackbar",
          variant !== "fill" && `moon-snackbar-${variant}`,
          context !== "brand" && `moon-snackbar-${context}`
        )}
      >
        {children}
      </div>
    )
  );
};

Root.displayName = "Snackbar";
Action.displayName = "Snackbar.Action";
Meta.displayName = "Snackbar.Meta";
Group.displayName = "Snackbar.Group";

const Snackbar = Object.assign(Root, { Action, Meta, Group });

export default Snackbar;
