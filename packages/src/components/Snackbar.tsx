import { createContext, useContext, useState } from "react";
import mergeClasses from "../helpers/mergeClasses";
import { Contexts } from "../constants/contexts";

export enum SnackbarVariants {
  fill = "fill",
  soft = "soft",
}

type SnackbarContextType = {
  variant: SnackbarVariants;
  context: Contexts;
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
  context?: Contexts;
};

export const Snackbar = ({
  children,
  variant = SnackbarVariants.fill,
  context = Contexts.brand,
}: SnackbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SnackbarContext.Provider value={{ variant, context, isOpen, setIsOpen }}>
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
  const { variant, context, isOpen, setIsOpen } = useSnackbarContext();

  if (!isOpen) return null;

  return (
    <div
      className={mergeClasses(
        "moon-snackbar",
        variant !== SnackbarVariants.fill && `moon-snackbar-${variant}`,
        context !== Contexts.brand && `moon-snackbar-${context}`,
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
