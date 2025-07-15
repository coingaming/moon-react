import React from "react";
import UserIcon from "../assets/icons/UserIcon";
import mergeClasses from "../helpers/mergeClasses";

export enum AvatarSizes {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  "2xl" = "2xl",
}

export enum AvatarVariants {
  fill = "fill",
  outline = "outline",
  soft = "soft",
}

const Avatar = ({
  size = AvatarSizes.md,
  variant = AvatarVariants.soft,
  imgSrc,
  ...props
}: React.ComponentProps<"div"> & {
  size?: AvatarSizes;
  variant?: AvatarVariants;
  imgSrc?: string;
}) => {
  return (
    <div
      className={mergeClasses(
        "moon-avatar",
        size !== AvatarSizes.md && `moon-avatar-${size}`,
        variant !== AvatarVariants.soft && `moon-avatar-${variant}`
      )}
      {...props}
    >
      {imgSrc ? <img src={imgSrc} /> : <UserIcon />}
    </div>
  );
};

export default Avatar;
