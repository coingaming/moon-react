import React, { createContext, useContext, useState } from "react";
import mergeClasses from "../helpers/mergeClasses";

type DropdownContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

type DropdownProps = {
  children: React.ReactNode;
  defaultOpen?: boolean;
};

type DropdownTriggerProps = {
  children: React.ReactNode;
};

type DropdownContentProps = {
  children: React.ReactNode;
  className?: string;
};

const DropdownContext = createContext<DropdownContextType | null>(null);

function useDropdownContext() {
  const ctx = useContext(DropdownContext);
  if (!ctx)
    throw new Error("Dropdown components must be used within <Dropdown>");
  return ctx;
}

const Trigger = ({ children }: DropdownTriggerProps) => {
  const { setOpen, open } = useDropdownContext();
  return <span onClick={() => setOpen(!open)}>{children}</span>;
};

const Content = ({ children, className }: DropdownContentProps) => {
  const { open } = useDropdownContext();
  if (!open) return null;
  return (
    <div className={mergeClasses("moon-dropdown", className)}>{children}</div>
  );
};

const Root = ({ children, defaultOpen = false }: DropdownProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      {children}
    </DropdownContext.Provider>
  );
};

Root.displayName = "Dropdown";
Trigger.displayName = "Dropdown.Trigger";
Content.displayName = "Dropdown.Content";

const Dropdown = Object.assign(Root, {
  Trigger,
  Content,
});

export default Dropdown;
