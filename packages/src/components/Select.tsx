import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes, Variants } from "../types";

export type SelectSizes = Extract<Sizes, "sm" | "md" | "lg" | "xl">;

export type SelectVariants = Extract<Variants, "fill" | "outline">;

export type SelectType = Omit<React.ComponentProps<"select">, "size">;

export type SelectProps = SelectType & {
  size?: SelectSizes;
  variant?: SelectVariants;
  error?: boolean;
  children: React.ReactNode;
  className?: string;
};

export const Select = ({
  children,
  size = "md",
  variant = "fill",
  error = false,
  className,
  ...props
}: SelectProps) => {
  return (
    <select
      className={mergeClasses(
        "moon-select",
        size !== "md" && `moon-select-${size}`,
        variant !== "fill" && `moon-select-${variant}`,
        error && "moon-select-error",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
};

export type SelectItemProps = React.ComponentProps<"option"> & {
  children: React.ReactNode;
};

export const SelectItem = ({ children, ...props }: SelectItemProps) => (
  <option {...props}>{children}</option>
);

export type SelectItemsGroupProps = React.ComponentProps<"optgroup"> & {
  children: React.ReactNode;
  label: string;
  disabled?: boolean;
};

export const SelectItemsGroup = ({
  children,
  ...props
}: SelectItemsGroupProps) => <optgroup {...props}>{children}</optgroup>;
