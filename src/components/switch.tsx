import * as React from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum SwitchSizes {
  "2xs" = "2xs",
  xs = "xs",
  sm = "sm",
}

type Props = Omit<React.ComponentProps<"input">, "size"> & {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  label?: string;
  size?: SwitchSizes;
  className?: string;
};

export function Switch({
  onChange,
  size = SwitchSizes.sm,
  label,
  className,
  ...props
}: Props) {
  return (
    <label>
      {label && label}
      <input
        type="checkbox"
        onChange={() => onChange()}
        className={mergeClasses(
          "moon-switch",
          size !== SwitchSizes.sm && `moon-switch-${size}`,
          className
        )}
        {...props}
      />
    </label>
  );
}
