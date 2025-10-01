import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Positions } from "../types";

export type TooltipPositions = Positions;

type TooltipChildren = {
  children: React.ReactNode;
  className?: string;
};

type TooltipProps = {
  children: React.ReactNode;
  position?: TooltipPositions;
  hasPointer?: boolean;
};

const Trigger = ({ children, className }: TooltipChildren) => (
  <p className={className}>{children}</p>
);

const Content = ({ children, className }: TooltipChildren) => (
  <div className={mergeClasses("moon-tooltip-content", className)}>
    {children}
  </div>
);

const Root = ({
  children,
  position = "top",
  hasPointer = false,
}: TooltipProps) => (
  <div
    className={mergeClasses(
      "moon-tooltip",
      position !== "top" && `moon-tooltip-${position}`,
      hasPointer && "moon-tooltip-pointer"
    )}
  >
    {children}
  </div>
);

Root.displayName = "Tooltip";
Trigger.displayName = "Tooltip.Trigger";
Content.displayName = "Tooltip.Content";

const Tooltip = Object.assign(Root, { Trigger, Content });

export default Tooltip;
