import UserIcon from "../assets/icons/UserIcon";
import mergeClasses from "../helpers/mergeClasses";

export const AvatarSizes = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
} as const;

export const AvatarVariants = {
  fill: "fill",
  soft: "soft",
} as const;

type Props = React.ComponentProps<"div"> & {
  size?: keyof typeof AvatarSizes;
  variant?: keyof typeof AvatarVariants;
  imgSrc?: string;
  className?: string;
};

export const Avatar = ({
  size = AvatarSizes.md,
  variant = AvatarVariants.fill,
  imgSrc,
  className,
  ...props
}: Props) => (
  <div
    className={mergeClasses(
      "moon-avatar",
      size !== AvatarSizes.md && `moon-avatar-${size}`,
      variant !== AvatarVariants.fill && `moon-avatar-${variant}`,
      className
    )}
    {...props}
  >
    {imgSrc ? <img src={imgSrc} /> : <UserIcon />}
  </div>
);
