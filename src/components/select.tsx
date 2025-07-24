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

export const Select: React.FC<SelectProps> = ({ children, ...props }) => {
  return (
    <SelectContext.Provider value={props}>{children}</SelectContext.Provider>
  );
};

export type SelectContentProps = React.ComponentProps<"select"> & {
  children: React.ReactNode;
  className?: string;
};

export const SelectContent: React.FC<SelectContentProps> = ({
  children,
  className,
  ...rest
}) => {
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
      {...rest}
    >
      {children}
    </select>
  );
};

export type SelectItemProps = React.ComponentProps<"option"> & {
  children: React.ReactNode;
};

export const SelectItem: React.FC<SelectItemProps> = ({
  children,
  ...props
}) => {
  return <option {...props}>{children}</option>;
};

export type SelectItemsGroupProps = React.ComponentProps<"optgroup"> & {
  children: React.ReactNode;
  label: string;
  disabled?: boolean;
};

export const SelectItemsGroup: React.FC<SelectItemsGroupProps> = ({
  children,
  ...props
}) => {
  return <optgroup {...props}>{children}</optgroup>;
};
