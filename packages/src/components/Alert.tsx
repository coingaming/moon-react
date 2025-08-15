import mergeClasses from "../helpers/mergeClasses";
import Close from "../assets/icons/CloseIcon";

export enum AlertVariants {
  neutral = "neutral",
  negative = "negative",
  positive = "positive",
  info = "info",
}

type Props = {
  children: React.ReactNode;
  className?: string;
};

type AlertRootProps = React.ComponentProps<"div"> &
  Props & {
    variant?: AlertVariants;
  };

type ActionProps = Props & {
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export const Alert = ({
  variant = AlertVariants.neutral,
  children,
  className,
}: AlertRootProps) => (
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

export const AlertTitle = ({ children, className }: Props) => (
  <span className={mergeClasses("moon-alert-title", className)}>
    {children}
  </span>
);

export const AlertDismiss = ({ children, onClick, className }: ActionProps) => (
  <p
    className={mergeClasses("moon-alert-dismiss", className)}
    onClick={onClick}
  >
    {children ? children : <Close />}
  </p>
);

export const AlertContent = ({ children, className }: Props) => (
  <div className={mergeClasses("moon-alert-content", className)}>
    {children}
  </div>
);

export const AlertAction = ({ children, onClick, className }: ActionProps) => (
  <button
    className={mergeClasses("moon-alert-action", className)}
    onClick={onClick}
  >
    {children}
  </button>
);
