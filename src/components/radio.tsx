import React, { ReactNode } from "react";

export type RadioProps = Omit<React.ComponentProps<"input">, "type">;
export type RadioChildren = { children: ReactNode };

export const Radio: React.FC<RadioProps> = (props) => {
  return <input type="radio" className="moon-radio" {...props} />;
};

export const RadioLabel: React.FC<RadioChildren> = ({ children }) => {
  return <label>{children}</label>;
};

export const RadioWrapper: React.FC<RadioChildren> = ({ children }) => {
  return <div className="moon-radio-wrapper">{children}</div>;
};
