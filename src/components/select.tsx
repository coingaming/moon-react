import React, { createContext, useContext } from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum Sizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

type SelectType = Omit<React.ComponentProps<"select">, "size">;

type SelectProps = SelectType & {
  size?: Sizes;
  error?: boolean;
  children: React.ReactNode;
};

type SelectContextType = Omit<SelectProps, "children">;

const DEFAULT_SELECT_CONTEXT: SelectContextType = {
  size: Sizes.md,
  disabled: false,
  error: false,
};

const SelectContext = createContext<SelectContextType>(DEFAULT_SELECT_CONTEXT);

export function Select({ children, ...props }: SelectProps) {
  return (
    <SelectContext.Provider value={props}>{children}</SelectContext.Provider>
  );
}

export type SelectContentProps = React.ComponentProps<"select"> & {
  children: React.ReactNode;
  className?: string;
};

export function SelectContent({ children, className }: SelectContentProps) {
  const { size, disabled, error, ...props } = useContext(SelectContext);
  return (
    <select
      className={mergeClasses(
        "moon-select",
        size !== Sizes.md && `moon-select-${size}`,
        error && "moon-select-error",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export type SelectItemProps = React.ComponentProps<"option"> & {
  children: React.ReactNode;
};

export function SelectItem({ children, ...props }: SelectItemProps) {
  return <option {...props}>{children}</option>;
}

export type SelectItemsGroupProps = React.ComponentProps<"optgroup"> & {
  children: React.ReactNode;
  label: string;
  disabled?: boolean;
};

export function SelectItemsGroup({
  children,
  ...props
}: SelectItemsGroupProps) {
  return <optgroup {...props}>{children}</optgroup>;
}
