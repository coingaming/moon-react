import React from "react";
import UserIcon from "../assets/icons/UserIcon";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes, Variants } from "../types";

export type AvatarSizes = Extract<
  Sizes,
  "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
>;

export type AvatarVariants = Extract<Variants, "fill" | "soft">;

export type AvatarProps = React.ComponentProps<"div"> & {
  size?: AvatarSizes;
  variant?: AvatarVariants;
  imgSrc?: string;
  className?: string;
};

export const Avatar = ({
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
    {imgSrc ? <img src={imgSrc} /> : <UserIcon />}
  </div>
);
