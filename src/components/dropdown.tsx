import React, { createContext, useContext, useState } from "react";
import mergeClasses from "../helpers/mergeClasses";

type DropdownContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DropdownContext = createContext<DropdownContextType | null>(null);

export function useDropdownContext() {
  const ctx = useContext(DropdownContext);
  if (!ctx)
    throw new Error("Dropdown components must be used within <Dropdown>");
  return ctx;
}

export function Dropdown({
  children,
  open,
  setOpen,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: (_open: boolean) => void;
}) {
  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      {children}
    </DropdownContext.Provider>
  );
}

export function DropdownTrigger({ children }: { children: React.ReactNode }) {
  const { setOpen, open } = useDropdownContext();
  return <span onClick={() => setOpen(!open)}>{children}</span>;
}

export function DropdownContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { open } = useDropdownContext();
  if (!open) return null;
  return (
    <div className={mergeClasses("moon-dropdown", className)}>{children}</div>
  );
}
