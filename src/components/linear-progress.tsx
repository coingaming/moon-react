import clsx from "clsx";
import * as React from "react";

function LinearProgress({
  className,
  value,
  children,
}: {
  children?: React.ReactNode;
  className?: string;
  value: number;
}) {
  return (
    <div className={clsx("moon-linear-progress-wrapper", className)}>
      {children}
      <progress
        value={String(value)}
        max="100"
        className="moon-linear-progress moon-linear-progress-3xs"
      ></progress>
    </div>
  );
}

export { LinearProgress };
