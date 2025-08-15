import mergeClasses from "../helpers/mergeClasses";

export enum TooltipPositions {
  top = "top",
  bottom = "bottom",
  start = "start",
  end = "end",
}

type TooltipChildren = {
  children: React.ReactNode;
  className?: string;
};

type TooltipProps = {
  children: React.ReactNode;
  position?: TooltipPositions;
  pointer?: boolean;
};

export const Tooltip = ({
  children,
  position = TooltipPositions.top,
  pointer = false,
}: TooltipProps) => (
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

export const TooltipTrigger = ({ children, className }: TooltipChildren) => (
  <p className={className}>{children}</p>
);

export const TooltipContent = ({ children, className }: TooltipChildren) => (
  <div className={mergeClasses("moon-tooltip-content", className)}>
    {children}
  </div>
);
