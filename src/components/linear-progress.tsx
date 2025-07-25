import React, { FC } from "react";
import mergeClasses from "../helpers/mergeClasses";

export type LinearProgressProps = {
  children?: React.ReactNode;
  className?: string;
  value: number;
};

const LinearProgress: FC<LinearProgressProps> = ({
  className,
  value,
  children,
}) => (
  <div className={mergeClasses("moon-linear-progress-wrapper", className)}>
    {children}
    <progress
      value={String(value)}
      max="100"
      className="moon-linear-progress moon-linear-progress-3xs"
    ></progress>
  </div>
);

export default LinearProgress;
