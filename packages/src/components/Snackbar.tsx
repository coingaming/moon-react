import { createContext, useContext, useState } from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum SnackbarVariants {
  caution = "caution",
  info = "info",
  neutral = "neutral",
  positive = "positive",
}

type SnackbarContextType = {
  variant: SnackbarVariants;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const SnackbarContext = createContext<SnackbarContextType | null>(null);

function useSnackbarContext() {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error(
      "Snackbar components must be used within <Snackbar> wrapper"
    );
  }
  return context;
}

type SnackbarProps = {
  children: React.ReactNode;
  variant?: SnackbarVariants;
};

export const Snackbar = ({
  children,
  variant = SnackbarVariants.neutral,
}: SnackbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SnackbarContext.Provider value={{ variant, isOpen, setIsOpen }}>
      {children}
    </SnackbarContext.Provider>
  );
};

export const SnackbarTrigger = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { setIsOpen } = useSnackbarContext();

  return <div onClick={() => setIsOpen(true)}>{children}</div>;
};

export const SnackbarContent = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & { children: React.ReactNode }) => {
  const { variant, isOpen, setIsOpen } = useSnackbarContext();

  if (!isOpen) return null;

  return (
    <div
      className={mergeClasses(
        "moon-snackbar",
        variant !== SnackbarVariants.neutral && `moon-snackbar-${variant}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const SnackbarAction = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={mergeClasses("moon-snackbar-action", className)}>
      {children}
    </div>
  );
};
