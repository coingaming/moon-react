import { createContext, useContext, useRef, useState } from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum AuthenticatorSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

type AuthenticatorProps = {
  length?: number;
  size?: AuthenticatorSizes;
  error?: boolean;
  value?: string;
  onChange?: (char: string | number) => void;
  children: React.ReactNode;
  className?: string;
};

type AuthenticatorItemProps = Omit<React.ComponentProps<"input">, "size"> & {
  index: number;
};

type AuthenticatorContextType = {
  onKeyDown: (
    _index: number,
    _e: React.KeyboardEvent<HTMLInputElement>
  ) => void;
  onPaste: (_e: React.ClipboardEvent<HTMLInputElement>) => void;
  onChange: (index: number, char: string) => void;
  size: AuthenticatorSizes;
  error: boolean;
  internalValue: string;
  inputsRef: React.RefObject<(HTMLInputElement | null)[]> | null;
};

const AUTHENTICATOR_DEFAULT_CONTEXT = {
  onKeyDown: (_index: number, _e: React.KeyboardEvent<HTMLInputElement>) => {},
  onPaste: (_e: React.ClipboardEvent<HTMLInputElement>) => {},
  onChange: (_index: number, _char: string) => {},
  size: AuthenticatorSizes.md,
  internalValue: "",
  error: false,
  inputsRef: null,
};

const AuthenticatorContext = createContext<AuthenticatorContextType>(
  AUTHENTICATOR_DEFAULT_CONTEXT
);

const useAuthenticatorContext = () => {
  const context = useContext(AuthenticatorContext);
  if (!context) {
    throw new Error(
      "Authenticator components should go inside <Authenticator />"
    );
  }

  return context;
};

export const Authenticator = ({
  length = 6,
  size = AuthenticatorSizes.md,
  error = false,
  value = "",
  onChange,
  children,
  className,
}: AuthenticatorProps) => {
  const [internalValue, setInternalValue] = useState(value);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, char: string) => {
    const newValueArray = internalValue.split("");
    newValueArray[index] = char;
    const newValue = newValueArray.join("");

    setInternalValue(newValue);
    onChange?.(newValue);

    if (char && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !internalValue[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData("text").slice(0, length);
    const clean = pasted.replace(/[^0-9a-zA-Z]/g, "").slice(0, length);

    if (clean) {
      setInternalValue(clean.padEnd(length, ""));
      onChange?.(clean);

      const targetIndex = Math.min(clean.length, length - 1);
      inputsRef.current[targetIndex]?.focus();
      e.preventDefault();
    }
  };
  return (
    <AuthenticatorContext.Provider
      value={{
        onChange: handleChange,
        onPaste: handlePaste,
        onKeyDown: handleKeyDown,
        size,
        error,
        internalValue,
        inputsRef,
      }}
    >
      <div
        className={mergeClasses(
          "moon-authenticator",
          size !== AuthenticatorSizes.md && `moon-authenticator-${size}`,
          error && "moon-authenticator-error",
          className
        )}
      >
        {children}
      </div>
    </AuthenticatorContext.Provider>
  );
};

export const AuthenticatorItem = ({
  index,
  ...props
}: AuthenticatorItemProps) => {
  const { onChange, onKeyDown, internalValue, onPaste, inputsRef } =
    useAuthenticatorContext();
  return (
    <input
      ref={(el) => {
        if (inputsRef?.current) {
          inputsRef.current[index] = el;
        }
      }}
      type="text"
      maxLength={1}
      value={internalValue[index] || ""}
      onChange={(e) => onChange(index, e.target.value.slice(-1))}
      onKeyDown={(e) => onKeyDown(index, e)}
      onPaste={onPaste}
      autoComplete="off"
      inputMode="text"
      pattern="[0-9a-zA-Z]*"
      {...props}
    />
  );
};
