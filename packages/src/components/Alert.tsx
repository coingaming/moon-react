import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import Close from "../assets/icons/CloseIcon";
import type { Variants, Contexts } from "../types";

export type AlertVariants = Extract<Variants, "fill" | "soft" | "outline">;

export type AlertProps = {
  children: React.ReactNode;
  className?: string;
};

export type AlertRootProps = React.ComponentProps<"div"> &
  AlertProps & {
    variant?: AlertVariants;
    context?: Contexts;
  };

export type ActionProps = AlertProps & {
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export const Alert = ({
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

export const AlertTitle = ({ children, className }: AlertProps) => (
  <span className={mergeClasses("moon-alert-title", className)}>
    {children}
  </span>
);

export const AlertDismiss = ({ children, onClick, className }: ActionProps) => (
  <p
    className={mergeClasses("moon-alert-dismiss", className)}
    onClick={onClick}
  >
    {children ? children : <Close />}
  </p>
);

export const AlertContent = ({ children, className }: AlertProps) => (
  <div className={mergeClasses("moon-alert-content", className)}>
    {children}
  </div>
);

export const AlertAction = ({ children, onClick, className }: ActionProps) => (
  <button
    className={mergeClasses("moon-alert-action", className)}
    onClick={onClick}
  >
    {children}
  </button>
);
