import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes, Variants } from "../types";

export type SelectSizes = Extract<Sizes, "sm" | "md" | "lg" | "xl">;

export type SelectVariants = Extract<Variants, "fill" | "outline">;

type SelectType = Omit<React.ComponentProps<"select">, "size">;

type SelectProps = SelectType & {
  size?: SelectSizes;
  variant?: SelectVariants;
  error?: boolean;
  children: React.ReactNode;
  className?: string;
};

type SelectItemProps = React.ComponentProps<"option"> & {
  children: React.ReactNode;
};

const Option = ({ children, ...props }: SelectItemProps) => (
  <option {...props}>{children}</option>
);

type SelectItemsGroupProps = React.ComponentProps<"optgroup"> & {
  children: React.ReactNode;
  label: string;
  disabled?: boolean;
};

const OptionGroup = ({ children, ...props }: SelectItemsGroupProps) => (
  <optgroup {...props}>{children}</optgroup>
);

const Root = ({
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

Root.displayName = "Select";
Option.displayName = "Select.Option";
OptionGroup.displayName = "Select.OptionGroup";

const Select = Object.assign(Root, { Option, OptionGroup });

export default Select;
