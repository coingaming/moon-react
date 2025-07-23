import React, { ReactNode } from "react";

export type RadioProps = Omit<React.ComponentProps<"input">, "type">;
export type RadioChildren = { children: ReactNode };

export const Radio = ({ ...props }: RadioProps) => {
  return <input type="radio" className="moon-radio" {...props} />;
};

export const RadioLabel = ({ children }: RadioChildren) => {
  return <label>{children}</label>;
};

export const RadioWrapper = ({ children }: RadioChildren) => {
  return <div className="moon-radio-wrapper">{children}</div>;
};
