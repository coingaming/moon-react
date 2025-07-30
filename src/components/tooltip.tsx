import React, { FC } from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum TooltipPosition {
  top = "top",
  bottom = "bottom",
  start = "start",
  end = "end",
}

export type TooltipChildren = {
  children: React.ReactNode;
  className?: string;
};

export type TooltipProps = {
  children: React.ReactNode;
  position?: TooltipPosition;
  pointer?: boolean;
};

const Tooltip: FC<TooltipProps> = ({
  children,
  position = TooltipPosition.top,
  pointer = false,
}) => (
  <div
    className={mergeClasses(
      "moon-tooltip",
      `moon-tooltip-${position}`,
      pointer && "moon-tooltip-pointer"
    )}
  >
    {children}
  </div>
);

export const TooltipTrigger: FC<TooltipChildren> = ({
  children,
  className,
}) => <p className={className}>{children}</p>;

export const TooltipContent: FC<TooltipChildren> = ({
  children,
  className,
}) => (
  <div className={mergeClasses("moon-tooltip-content", className)}>
    {children}
  </div>
);

export default Tooltip;
