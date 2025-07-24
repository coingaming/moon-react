import React, { FC } from "react";
import mergeClasses from "../helpers/mergeClasses";

export type PlaceholderProps = { className?: string };

const Placeholder: FC<PlaceholderProps> = ({ className }) => {
  return <div className={mergeClasses("moon-placeholder", className)} />;
};

export default Placeholder;
