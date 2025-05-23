import React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
import { clsx } from "clsx";

function Authenticator({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      className={className}
      containerClassName={containerClassName}
      {...props}
    />
  );
}

type Size = "sm" | "md" | "lg" | "xl";

const sizesClasses = {
  sm: "moon-authenticator-sm",
  md: "moon-authenticator-md",
  lg: "moon-authenticator-lg",
  xl: "moon-authenticator-xl",
};

function AuthenticatorGroup({
  className,
  error = false,
  size = "md",
  ...props
}: React.ComponentProps<"div"> & {
  error?: boolean;
  size?: Size;
}) {
  return (
    <div
      data-slot="input-otp-group"
      className={clsx("moon-authenticator", sizesClasses[size], {
        "moon-authenticator-error": error,
      })}
      {...props}
    />
  );
}

function AuthenticatorSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const AuthenticatorContext = React.useContext(OTPInputContext);
  const { char, isActive } = AuthenticatorContext?.slots[index] ?? {};
  const ref = React.useRef<HTMLInputElement>(null);

  return (
    <div
      className={clsx("moon-authenticator-slot", {
        "moon-authenticator-slot-focus": isActive,
      })}
      ref={ref}
      data-active={isActive}
      {...props}
      tabIndex={0}
    >
      <span>{char}</span>
    </div>
  );
}

function AuthenticatorSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}

export {
  Authenticator,
  AuthenticatorGroup,
  AuthenticatorSlot,
  AuthenticatorSeparator,
};
