import mergeClasses from "../helpers/mergeClasses";
import Close from "../assets/icons/CloseIcon";
import { Contexts } from "../constants/contexts";

export const AlertVariants = {
  fill: "fill",
  soft: "soft",
  outline: "outline",
} as const;

type Props = {
  children: React.ReactNode;
  className?: string;
};

type AlertRootProps = React.ComponentProps<"div"> &
  Props & {
    variant?: keyof typeof AlertVariants;
    context?: keyof typeof Contexts;
  };

type ActionProps = Props & {
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export const Alert = ({
  variant = AlertVariants.fill,
  context = Contexts.brand,
  children,
  className,
}: AlertRootProps) => (
  <div
    className={mergeClasses(
      "moon-alert",
      variant !== AlertVariants.fill && `moon-alert-${variant}`,
      context !== Contexts.brand && `moon-alert-${context}`,
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
