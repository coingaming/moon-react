import mergeClasses from "../helpers/mergeClasses";

export enum TextareaSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum TextareaVariants {
  fill = "fill",
  outline = "outline",
}

type TextareaProps = React.ComponentProps<"textarea"> & {
  size?: TextareaSizes;
  variant?: TextareaVariants;
  error?: boolean;
};

export const Textarea = ({
  className,
  size = TextareaSizes.md,
  variant = TextareaVariants.fill,
  error = false,
  ...props
}: TextareaProps) => (
  <textarea
    className={mergeClasses(
      "moon-textarea",
      size !== TextareaSizes.md && `moon-textarea-${size}`,
      variant !== TextareaVariants.fill && `moon-textarea-${variant}`,
      error && "moon-textarea-error",
      className
    )}
    {...props}
  />
);
