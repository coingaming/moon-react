import React from "react";
import mergeClasses from "../helpers/mergeClasses";

type Props = React.ComponentProps<"div"> & {
  className?: string;
  error?: boolean;
  children?: React.ReactNode;
};

type LabelProps = React.ComponentProps<"label"> & {
  className?: string;
  children?: React.ReactNode;
};

type HintProps = React.ComponentProps<"p"> & {
  className?: string;
  children?: React.ReactNode;
};

const Root = ({ className, error, children, ...props }: Props) => {
  const classes = mergeClasses(
    "moon-form-group",
    error && "moon-form-group-error",
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

const Label = ({ className, children, ...props }: LabelProps) => (
  <label className={className} {...props}>
    {children}
  </label>
);

const Hint = ({ className, children, ...props }: HintProps) => {
  const classes = mergeClasses("moon-form-hint", className);
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};

Root.displayName = "FormGroup";
Label.displayName = "FormGroup.Label";
Hint.displayName = "FormGroup.Hint";

const FormGroup = Object.assign(Root, { Label, Hint });

export default FormGroup;
