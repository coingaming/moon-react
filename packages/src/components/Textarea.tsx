import mergeClasses from "../helpers/mergeClasses";

export const TextareaSizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
} as const;

export const TextareaVariants = {
  fill: "fill",
  outline: "outline",
} as const;

type TextareaProps = React.ComponentProps<"textarea"> & {
  size?: keyof typeof TextareaSizes;
  variant?: keyof typeof TextareaVariants;
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
