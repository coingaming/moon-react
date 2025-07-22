import { ReactNode, MouseEventHandler, FC } from "react";
import mergeClasses from "../helpers/mergeClasses";
import Close from "../assets/icons/CloseIcon";

export enum AlertVariants {
  neutral = "neutral",
  negative = "negative",
  positive = "positive",
  info = "info",
}

export type AlertRootProps = React.ComponentProps<"div"> & {
  variant?: AlertVariants;
  children: ReactNode;
  className?: string;
};

export type TitleProps = {
  children: ReactNode;
  className?: string;
};

export type ActionProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
};

export type ContentProps = {
  children: ReactNode;
  className?: string;
};

const Alert: FC<AlertRootProps> = ({
  variant = AlertVariants.neutral,
  children,
  className,
}) => {
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
};

export const AlertTitle = ({ children, className }: TitleProps) => {
  return (
    <div className={mergeClasses("moon-alert-title-wrapper", className)}>
      <span className="moon-alert-title">{children}</span>
    </div>
  );
};

export const AlertDismiss: FC<ActionProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <p
      className={mergeClasses("moon-alert-dismiss", className)}
      onClick={onClick}
    >
      {children ? children : <Close />}
    </p>
  );
};

export const AlertContent: FC<ContentProps> = ({ children, className }) => {
  return (
    <div className={mergeClasses("moon-alert-content", className)}>
      {children}
    </div>
  );
};

export const AlertAction: FC<ActionProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      className={mergeClasses("moon-alert-action", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Alert;
