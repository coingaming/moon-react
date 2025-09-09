import React, { createContext, useContext, useState } from "react";
import mergeClasses from "../helpers/mergeClasses";

export type DropdownContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export type DropdownProps = {
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export type DropdownTriggerProps = {
  children: React.ReactNode;
};

export type DropdownContentProps = {
  children: React.ReactNode;
  className?: string;
};

const DropdownContext = createContext<DropdownContextType | null>(null);

export function useDropdownContext() {
  const ctx = useContext(DropdownContext);
  if (!ctx)
    throw new Error("Dropdown components must be used within <Dropdown>");
  return ctx;
}

export const Dropdown = ({ children, defaultOpen = false }: DropdownProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const DropdownTrigger = ({ children }: DropdownTriggerProps) => {
  const { setOpen, open } = useDropdownContext();
  return <span onClick={() => setOpen(!open)}>{children}</span>;
};

export const DropdownContent = ({
  children,
  className,
}: DropdownContentProps) => {
  const { open } = useDropdownContext();
  if (!open) return null;
  return (
    <div className={mergeClasses("moon-dropdown", className)}>{children}</div>
  );
};

/* 
  TODO: Waiting for new css rules to apply Daisy UI approach
 ------ 
export const Dropdown: FC<DropdownProps> = ({ children }) => {
  return <div>{children}</div>;
};

export const DropdownTrigger: FC<DropdownTriggerProps> = ({ children }) => {
  return (
    <div role="button" tabIndex={0}>
      {children}
    </div>
  );
};

export const DropdownContent: FC<DropdownContentProps> = ({
  children,
  className,
}) => {
  return (
    <div tabIndex={0} className={mergeClasses("moon-dropdown", className)}>
      {children}
    </div>
  );
};
 */
