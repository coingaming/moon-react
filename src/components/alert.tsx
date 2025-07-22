import { ReactNode, MouseEventHandler } from "react";
import mergeClasses from "../helpers/mergeClasses";
import Close from "../assets/icons/CloseIcon";

enum AlertVariants {
  neutral = "neutral",
  negative = "negative",
  positive = "positive",
  info = "info",
}

type AlertRootProps = React.ComponentProps<"div"> & {
  variant?: AlertVariants;
  children: ReactNode;
  className?: string;
};

function Alert({
  variant = AlertVariants.neutral,
  children,
  className,
}: AlertRootProps) {
  return (
    <div
      className={mergeClasses(
        "moon-alert",
        variant !== AlertVariants.neutral && `moon-alert-${variant}`,
        className
      )}
    >
      {children}
    </div>
  );
}

interface TitleProps {
  children: ReactNode;
  className?: string;
}

function AlertTitle({ children, className }: TitleProps) {
  return (
    <div className={mergeClasses("moon-alert-title-wrapper", className)}>
      <span className="moon-alert-title">{children}</span>
    </div>
  );
}

function AlertDismiss({
  children,
  onClick,
  className,
}: {
  children?: ReactNode;
  onClick?: (_e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
}) {
  return (
    <p
      className={mergeClasses("moon-alert-dismiss", className)}
      onClick={onClick}
    >
      {children ? children : <Close />}
    </p>
  );
}

interface ContentProps {
  children: ReactNode;
  className?: string;
}

function AlertContent({ children, className }: ContentProps) {
  return (
    <div className={mergeClasses("moon-alert-content", className)}>
      {children}
    </div>
  );
}

interface ActionProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

function AlertAction({ children, onClick, className }: ActionProps) {
  return (
    <button
      className={mergeClasses("moon-alert-action", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export {
  Alert,
  AlertTitle,
  AlertContent,
  AlertAction,
  AlertDismiss,
  AlertVariants,
};
