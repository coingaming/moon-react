import { Contexts } from "../constants/contexts";
import mergeClasses from "../helpers/mergeClasses";

export enum TagSizes {
  "2xs" = "2xs",
  xs = "xs",
}

export enum TagVariants {
  fill = "fill",
  outline = "outline",
  soft = "soft",
  ghost = "ghost",
}

type TagProps = React.ComponentProps<"div"> & {
  size?: TagSizes;
  variant?: TagVariants;
  context?: Contexts;
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
