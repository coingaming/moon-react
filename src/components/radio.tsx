import React, { ReactNode } from "react";

export const Radio = ({
  ...props
}: Omit<React.ComponentProps<"input">, "type">) => {
  return <input type="radio" className="moon-radio" {...props} />;
};

export const RadioLabel = ({ children }: { children: ReactNode }) => {
  return <label>{children}</label>;
};

export const RadioWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="moon-radio-wrapper">{children}</div>;
};
