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

export function SelectContent({
  children,
  className,
}: React.ComponentProps<"select"> & {
  children: React.ReactNode;
  className?: string;
}) {
  const { size, disabled, error, ...props } = useContext(SelectContext);
  return (
    <select
      className={mergeClasses(
        "moon-select",
        size !== Sizes.md && `moon-select-${size}`,
        { "moon-select-error": error as boolean },
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export function SelectItem({
  children,
  ...props
}: {
  children: React.ReactNode & React.ComponentProps<"option">;
}) {
  return <option {...props}>{children}</option>;
}

export function SelectItemsGroup({
  children,
  ...props
}: {
  children: React.ReactNode;
  label: string;
  disabled?: boolean;
} & React.ComponentProps<"optgroup">) {
  return <optgroup {...props}>{children}</optgroup>;
}
