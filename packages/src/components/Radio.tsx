import React from "react";
import mergeClasses from "../helpers/mergeClasses";

type RadioProps = Omit<React.ComponentProps<"input">, "type"> & {
  label?: string;
};

type RadioGroupProps = {
  children: React.ReactNode;
  className?: string;
  name: string;
};

const Group = ({ children, className, name }: RadioGroupProps) => {
  const childrenWithName = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, { name });
    }
    return child;
  });
  return (
    <div
      className={mergeClasses("moon-radio-group", className)}
      role="radiogroup"
    >
      {childrenWithName}
    </div>
  );
};

const Root = ({ className, label, ...props }: RadioProps) => {
  if (label) {
    return (
      <label className={className}>
        <input type="radio" className="moon-radio" {...props} />
        <span>{label}</span>
      </label>
    );
  }
  return (
    <input
      type="radio"
      className={mergeClasses("moon-radio", className)}
      {...props}
    />
  );
};

Root.displayName = "Radio";
Group.displayName = "Radio.Group";

const Radio = Object.assign(Root, { Group });

export default Radio;
