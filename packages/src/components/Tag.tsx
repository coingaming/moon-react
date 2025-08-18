import mergeClasses from "../helpers/mergeClasses";

export enum TagSizes {
  "2xs" = "2xs",
  xs = "xs",
}

export enum TagVariants {
  fill = "fill",
  outline = "outline",
}

type TagProps = React.ComponentProps<"div"> & {
  size?: TagSizes;
  variant?: TagVariants;
  className?: string;
  children: React.ReactNode;
};

export const Tag = ({ size, variant, children, className }: TagProps) => (
  <div
    className={mergeClasses(
      "moon-tag",
      size !== TagSizes.xs && `moon-tag-${size}`,
      variant !== TagVariants.fill && `moon-tag-${variant}`,
      className
    )}
  >
    {children}
  </div>
);
