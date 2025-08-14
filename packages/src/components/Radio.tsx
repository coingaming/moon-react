import React, { ReactNode } from "react";
import mergeClasses from "../helpers/mergeClasses";

export type RadioProps = Omit<React.ComponentProps<"input">, "type">;
export type RadioWrapperProps = React.ComponentProps<"div"> & {
  children: ReactNode;
};
export type RadioLabelProps = React.ComponentProps<"label"> & {
  children: ReactNode | string;
};

export const Radio: React.FC<RadioProps> = ({ className, ...props }) => (
  <input
    type="radio"
    className={mergeClasses("moon-radio", className)}
    {...props}
  />
);

export const RadioLabel: React.FC<RadioLabelProps> = ({
  children,
  ...props
}) => <label {...props}>{children}</label>;

export const RadioWrapper: React.FC<RadioWrapperProps> = ({
  children,
  className,
  ...props
}) => (
  <div className={mergeClasses("moon-radio-wrapper", className)} {...props}>
    {children}
  </div>
);
