import mergeClasses from "../helpers/mergeClasses";

export enum InputSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum InputVariants {
  fill = "fill",
  outline = "outline",
}

type InputProps = Omit<React.ComponentProps<"input">, "size"> & {
  size?: InputSizes;
  variant?: InputVariants;
  error?: boolean;
};

export const Input = ({
  className,
  type,
  error = false,
  size = InputSizes.md,
  variant = InputVariants.fill,
  ...props
}: InputProps) => (
  <input
    type={type}
    data-slot="input"
    className={mergeClasses(
      "moon-input",
      size !== InputSizes.md && `moon-input-${size}`,
      variant !== InputVariants.fill && `moon-input-${variant}`,
      error && "moon-input-error",
      className
    )}
    {...props}
  />
);
