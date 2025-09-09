import { Contexts } from "../constants/contexts";
import mergeClasses from "../helpers/mergeClasses";

export const ButtonSizes = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
} as const;

export const ButtonVariants = {
  soft: "soft",
  outline: "outline",
  fill: "fill",
  ghost: "ghost",
} as const;

type Props = React.ComponentProps<"button"> & {
  variant?: keyof typeof ButtonVariants;
  size?: keyof typeof ButtonSizes;
  context?: keyof typeof Contexts;
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
