import * as React from "react";
import clsx from "clsx";

const alertVariants = {
  neutral: "moon-alert-neutral",
  negative: "moon-alert-negative",
  caution: "moon-alert-caution",
  info: "moon-alert-info",
} as const;

function Alert({
  className,
  variant = "neutral",
  ...props
}: React.ComponentProps<"div"> & { variant: keyof typeof alertVariants }) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={clsx("moon-alert", alertVariants[variant], className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="alert-title" className="moon-alert-title" {...props} />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="alert-description" className={className} {...props} />;
}

export { Alert, AlertTitle, AlertDescription };
