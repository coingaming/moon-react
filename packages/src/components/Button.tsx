import { Contexts } from "../constants/contexts";
import mergeClasses from "../helpers/mergeClasses";

export enum ButtonSizes {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonVariants {
  soft = "soft",
  outline = "outline",
  fill = "fill",
  ghost = "ghost",
}

type Props = React.ComponentProps<"button"> & {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  context?: Contexts;
  className?: string;
};

export const Button = ({
  className,
  variant = ButtonVariants.fill,
  size = ButtonSizes.md,
  context = Contexts.brand,
  ...props
}: Props) => (
  <button
    data-slot="button"
    className={mergeClasses(
      "moon-button",
      variant !== ButtonVariants.fill && `moon-button-${variant}`,
      size !== ButtonSizes.md && `moon-button-${size}`,
      context !== Contexts.brand && `moon-button-${context}`,
      className
    )}
    {...props}
  />
);
