import React from "react";
import User from "../assets/icons/User";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes, Variants } from "../types";

export type AvatarSizes = Extract<
  Sizes,
  "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
>;

export type AvatarVariants = Extract<Variants, "fill" | "soft">;

type AvatarProps = React.ComponentProps<"div"> & {
  size?: AvatarSizes;
  variant?: AvatarVariants;
  imgSrc?: string;
  className?: string;
};

const Avatar = ({
  size = "md",
  variant = "fill",
  imgSrc,
  className,
  ...props
}: AvatarProps) => (
  <div
    className={mergeClasses(
      "moon-avatar",
      size !== "md" && `moon-avatar-${size}`,
      variant !== "fill" && `moon-avatar-${variant}`,
      className
    )}
    {...props}
  >
    {imgSrc ? <img src={imgSrc} /> : <User />}
  </div>
);

Avatar.displayName = "Avatar";

export default Avatar;
