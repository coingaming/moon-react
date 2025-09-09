import { Contexts } from "../constants/contexts";
import mergeClasses from "../helpers/mergeClasses";

export const TagSizes = {
  "2xs": "2xs",
  xs: "xs",
} as const;

export const TagVariants = {
  fill: "fill",
  outline: "outline",
  soft: "soft",
  ghost: "ghost",
} as const;

type TagProps = React.ComponentProps<"div"> & {
  size?: keyof typeof TagSizes;
  variant?: keyof typeof TagVariants;
  context?: keyof typeof Contexts;
  className?: string;
  children: React.ReactNode;
};

export const Tag = ({
  size,
  variant,
  context,
  children,
  className,
}: TagProps) => (
  <div
    className={mergeClasses(
      "moon-tag",
      size !== TagSizes.xs && `moon-tag-${size}`,
      variant !== TagVariants.fill && `moon-tag-${variant}`,
      context !== Contexts.brand && `moon-tag-${context}`,
      className
    )}
  >
    {children}
  </div>
);
