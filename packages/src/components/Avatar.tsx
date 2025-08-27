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
  soft = "soft",
}

type Props = React.ComponentProps<"div"> & {
  size?: AvatarSizes;
  variant?: AvatarVariants;
  imgSrc?: string;
};

export const Avatar = ({
  size = AvatarSizes.md,
  variant = AvatarVariants.fill,
  imgSrc,
  ...props
}: Props) => (
  <div
    className={mergeClasses(
      "moon-avatar",
      size !== AvatarSizes.md && `moon-avatar-${size}`,
      variant !== AvatarVariants.fill && `moon-avatar-${variant}`
    )}
    {...props}
  >
    {imgSrc ? <img src={imgSrc} /> : <UserIcon />}
  </div>
);
