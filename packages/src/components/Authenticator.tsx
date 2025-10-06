import React, { useState, useRef } from "react";
import { mergeClasses } from "../helpers/mergeClasses";
import type { Variants, Sizes } from "../types";

export type AuthenticatorSizes = Extract<Sizes, "sm" | "md" | "lg" | "xl">;

export type AuthenticatorVariants = Extract<Variants, "fill" | "outline">;

type AuthenticatorProps = {
  id?: string;
  length?: number;
  size?: AuthenticatorSizes;
  variant?: AuthenticatorVariants;
  error?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

const Authenticator = ({
  id = "",
  length = 6,
  size = "md",
  variant = "fill",
  error = false,
  disabled = false,
  value = "",
  onChange,
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

  const renderInputs = () =>
    Array.from({ length }, (_, index) => (
      <input
        key={index}
        id={index === 0 ? id : `${id}${index}`}
        ref={(el) => {
          if (inputsRef?.current) {
            inputsRef.current[index] = el;
          }
        }}
        type="text"
        maxLength={1}
        value={internalValue[index] || ""}
        onChange={(e) => handleChange(index, e.target.value.slice(-1))}
        onKeyDown={(e) => handleKeyDown(index, e)}
        onPaste={handlePaste}
        autoComplete="off"
        inputMode="text"
        pattern="[0-9a-zA-Z]*"
        disabled={disabled}
      />
    ));

  return (
    <div
      className={mergeClasses(
        "moon-authenticator",
        size !== "md" && `moon-authenticator-${size}`,
        variant !== "fill" && `moon-authenticator-${variant}`,
        error && "moon-authenticator-error",
        className
      )}
      role="group"
    >
      {renderInputs()}
    </div>
  );
};

Authenticator.displayName = "Authenticator";

export default Authenticator;
