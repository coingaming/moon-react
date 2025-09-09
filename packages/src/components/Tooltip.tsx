import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Positions } from "../types";

export type TooltipPositions = Positions;

export type TooltipChildren = {
  children: React.ReactNode;
  className?: string;
};

export type TooltipProps = {
  children: React.ReactNode;
  position?: TooltipPositions;
  pointer?: boolean;
};

export const Tooltip = ({
  children,
  position = "top",
  pointer = false,
}: TooltipProps) => (
  <div
    className={mergeClasses(
      "moon-tooltip",
      position !== "top" && `moon-tooltip-${position}`,
      pointer && "moon-tooltip-pointer"
    )}
  >
    {children}
  </div>
);

export const TooltipTrigger = ({ children, className }: TooltipChildren) => (
  <p className={className}>{children}</p>
);

export const TooltipContent = ({ children, className }: TooltipChildren) => (
  <div className={mergeClasses("moon-tooltip-content", className)}>
    {children}
  </div>
);
