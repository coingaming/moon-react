import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import CloseIcon from "../assets/icons/Close";
import type { Variants, Contexts } from "../types";

export type AlertVariants = Extract<Variants, "fill" | "soft" | "outline">;

type AlertProps = {
  children?: React.ReactNode;
  className?: string;
};

type AlertRootProps = React.ComponentProps<"div"> &
  AlertProps & {
    variant?: AlertVariants;
    context?: Contexts;
  };

type ActionProps = AlertProps & {
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const Close = ({ children, onClick, className }: ActionProps) => (
  <p className={mergeClasses("moon-alert-close", className)} onClick={onClick}>
    {children ? children : <CloseIcon />}
  </p>
);

const Meta = ({ children, className }: AlertProps) => (
  <p className={mergeClasses("moon-alert-meta", className)}>{children}</p>
);

const Content = ({ children, className }: AlertProps) => (
  <div className={mergeClasses("moon-alert-content", className)}>
    {children}
  </div>
);

const Action = ({ children, onClick, className }: ActionProps) => (
  <button
    className={mergeClasses("moon-alert-action", className)}
    onClick={onClick}
  >
    {children}
  </button>
);

const Root = ({
  variant = "fill",
  context = "brand",
  children,
  className,
}: AlertRootProps) => (
  <div
    className={mergeClasses(
      "moon-alert",
      variant !== "fill" && `moon-alert-${variant}`,
      context !== "brand" && `moon-alert-${context}`,
      className
    )}
  >
    {children}
  </div>
);

Root.displayName = "Alert";
Action.displayName = "Alert.Action";
Content.displayName = "Alert.Content";
Meta.displayName = "Alert.Meta";

const Alert = Object.assign(Root, {
  Close,
  Content,
  Action,
  Meta,
});

export default Alert;
