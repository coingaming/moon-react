import { Button } from "./Button";
import mergeClasses from "../helpers/mergeClasses";
import { Contexts } from "../constants/contexts";

export enum IconButtonSizes {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum IconButtonVariants {
  soft = "soft",
  outline = "outline",
  fill = "fill",
  ghost = "ghost",
}

type IconButtonProps = React.ComponentProps<"button"> & {
  className?: string;
  variant?: IconButtonVariants;
  size?: IconButtonSizes;
  context?: Contexts;
};

export const IconButton = ({
  className,
  size = IconButtonSizes.md,
  variant = IconButtonVariants.fill,
  context = Contexts.brand,
  ...props
}: IconButtonProps) => (
  <button
    data-slot="icon-button"
    className={mergeClasses(
      "moon-icon-button",
      variant !== IconButtonVariants.fill && `moon-icon-button-${variant}`,
      size !== IconButtonSizes.md && `moon-icon-button-${size}`,
      context !== Contexts.brand && `moon-icon-button-${context}`,
      className
    )}
    {...props}
  />
);
