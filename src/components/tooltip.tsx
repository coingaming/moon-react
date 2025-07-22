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
}) => {
  return (
    <div
      className={mergeClasses("moon-tooltip", `moon-tooltip-${position}`, {
        "moon-tooltip-pointer": pointer,
      })}
    >
      {children}
    </div>
  );
};

export const TooltipTrigger: FC<TooltipChildren> = ({
  children,
  className,
}) => {
  return <p className={className}>{children}</p>;
};

export const TooltipContent: FC<TooltipChildren> = ({
  children,
  className,
}) => {
  return (
    <div className={mergeClasses("moon-tooltip-content", className)}>
      {children}
    </div>
  );
};

export default Tooltip;
