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

type Props = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  className?: string;
}

export const Button = ({
  className,
  variant = ButtonVariants.fill,
  size = ButtonSizes.md,
  ...props
}: React.ComponentProps<"button"> & Props) => (
  <button
    data-slot="button"
    className={mergeClasses(
      "moon-button",
      variant !== ButtonVariants.fill && `moon-button-${variant}`,
      size !== ButtonSizes.md && `moon-button-${size}`,
      className
    )}
    {...props}
  />
);

