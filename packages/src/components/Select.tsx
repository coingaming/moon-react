import mergeClasses from "../helpers/mergeClasses";

export enum SelectSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum SelectVariants {
  fill = "fill",
  outline = "outline",
}

type SelectType = Omit<React.ComponentProps<"select">, "size">;

type SelectProps = SelectType & {
  size?: SelectSizes;
  variant?: SelectVariants;
  error?: boolean;
  children: React.ReactNode;
  className?: string;
};

export const Select = ({
  children,
  size = SelectSizes.md,
  variant = SelectVariants.fill,
  error = false,
  className,
  ...props
}: SelectProps) => {
  return (
    <select
      className={mergeClasses(
        "moon-select",
        size !== SelectSizes.md && `moon-select-${size}`,
        variant !== SelectVariants.fill && `moon-select-${variant}`,
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
