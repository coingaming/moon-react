import clsx from "clsx";
import React from "react";

const Placeholder = ({ className }: { className?: string }) => {
  return <div className={clsx("moon-placeholder", className)} />;
};

export default Placeholder;
