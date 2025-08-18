import mergeClasses from "../helpers/mergeClasses";

export enum TextareaSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

type TextareaProps = React.ComponentProps<"textarea"> & {
  size?: TextareaSizes;
  error?: boolean;
};

export const Textarea = ({
  className,
  size = TextareaSizes.md,
  error = false,
  ...props
}: TextareaProps) => (
  <textarea
    className={mergeClasses(
      "moon-textarea",
      size !== TextareaSizes.md && `moon-textarea-${size}`,
      error && "moon-textarea-error",
      className
    )}
    {...props}
  />
);
