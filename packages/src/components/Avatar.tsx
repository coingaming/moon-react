import React from "react";
import User from "../assets/icons/User";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes, Variants } from "../types";

export type AvatarSizes = Extract<
  Sizes,
  "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
>;

export type AvatarVariants = Extract<Variants, "fill" | "soft">;

type Props = React.ComponentProps<"div"> & {
  size?: AvatarSizes;
  variant?: AvatarVariants;
  className?: string;
  children?: React.ReactNode;
};

const Avatar = ({
  size = "md",
  variant = "fill",
  className,
  children,
  ...props
}: Props) => {
  const classes = mergeClasses(
    "moon-avatar",
    size !== "md" && `moon-avatar-${size}`,
    variant !== "fill" && `moon-avatar-${variant}`,
    className
  );

  return (
    <div className={classes} {...props}>
      {children || <User />}
    </div>
  );
};

Avatar.displayName = "Avatar";

export default Avatar;
