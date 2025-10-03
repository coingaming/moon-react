import React from "react";
import mergeClasses from "../helpers/mergeClasses";

type CheckboxProps = Omit<React.ComponentProps<"input">, "type"> & {
  label?: string;
};

const Checkbox = ({ className, label, ...props }: CheckboxProps) => {
  if (label) {
    return (
      <label className={className}>
        <input type="checkbox" className="moon-checkbox" {...props} />
        <span>{label}</span>
      </label>
    );
  }
  return (
    <input
      type="checkbox"
      className={mergeClasses("moon-checkbox", className)}
      {...props}
    />
  );
};

Checkbox.displayName = "Checkbox";

export default Checkbox;
