import clsx from "clsx";
import * as React from "react";
import "../../assets/css/moon-components.css";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={clsx("moon-textarea", className)}
      {...props}
    />
  );
}

export { Textarea };
