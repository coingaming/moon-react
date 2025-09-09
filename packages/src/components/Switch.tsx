import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes } from "../types";

export type SwitchSizes = Extract<Sizes, "2xs" | "xs" | "sm">;

export type SwitchProps = Omit<React.ComponentProps<"input">, "size"> & {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  label?: string;
  size?: SwitchSizes;
  className?: string;
};

export const Switch = ({
  onChange,
  size = "sm",
  label,
  className,
  ...props
}: SwitchProps) => (
  <label>
    {label && label}
    <input
      type="checkbox"
      onChange={() => onChange()}
      className={mergeClasses(
        "moon-switch",
        size !== "sm" && `moon-switch-${size}`,
        className
      )}
      {...props}
    />
  </label>
);
