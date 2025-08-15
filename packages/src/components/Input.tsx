import mergeClasses from "../helpers/mergeClasses";

export enum InputSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

type InputProps = Omit<React.ComponentProps<"input">, "size"> & {
  size?: InputSizes;
  error?: boolean;
};

export const Input = ({
  className,
  type,
  error = false,
  size = InputSizes.md,
  ...props
}: InputProps) => (
  <input
    type={type}
    data-slot="input"
    className={mergeClasses(
      "moon-input",
      size !== InputSizes.md && `moon-input-${size}`,
      error && "moon-input-error",
      className
    )}
    {...props}
  />
);
