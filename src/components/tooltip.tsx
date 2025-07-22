import * as React from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum TooltipPosition {
  top = "top",
  bottom = "bottom",
  start = "start",
  end = "end",
}

export function Tooltip({
  children,
  position = TooltipPosition.top,
  pointer = false,
}: {
  children: React.ReactNode;
  position?: TooltipPosition;
  pointer?: boolean;
}) {
  return (
    <div
      className={mergeClasses("moon-tooltip", `moon-tooltip-${position}`, {
        "moon-tooltip-pointer": pointer,
      })}
    >
      {children}
    </div>
  );
}

export function TooltipTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={className}>{children}</p>;
}

export function TooltipContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={mergeClasses("moon-tooltip-content", className)}>
      {children}
    </div>
  );
}
