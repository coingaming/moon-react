import * as React from "react";
import mergeClasses from "../helpers/mergeClasses";

export function Checkbox({
  className,
  label,
  ...props
}: Omit<React.ComponentProps<"input">, "type"> & { label?: string }) {
  return (
    <p className={mergeClasses("moon-checkbox-wrapper", className)}>
      <label>
        {label && label}
        <input type="checkbox" className="moon-checkbox" {...props} />
      </label>
    </p>
  );
}
