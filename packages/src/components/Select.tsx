import mergeClasses from "../helpers/mergeClasses";

export enum SelectSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

type SelectType = Omit<React.ComponentProps<"select">, "size">;

type SelectProps = SelectType & {
  size?: SelectSizes;
  error?: boolean;
  children: React.ReactNode;
  className?: string;
};

export const Select = ({
  children,
  size = SelectSizes.md,
  error = false,
  className,
  ...props
}: SelectProps) => {
  return (
    <select
      className={mergeClasses(
        "moon-select",
        size !== SelectSizes.md && `moon-select-${size}`,
        error && "moon-select-error",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
};

type SelectItemProps = React.ComponentProps<"option"> & {
  children: React.ReactNode;
};

export const SelectItem = ({ children, ...props }: SelectItemProps) => (
  <option {...props}>{children}</option>
);

type SelectItemsGroupProps = React.ComponentProps<"optgroup"> & {
  children: React.ReactNode;
  label: string;
  disabled?: boolean;
};

export const SelectItemsGroup = ({
  children,
  ...props
}: SelectItemsGroupProps) => <optgroup {...props}>{children}</optgroup>;
