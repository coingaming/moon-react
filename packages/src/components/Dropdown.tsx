import React from "react";
import mergeClasses from "../helpers/mergeClasses";

type DropdownProps = {
  children: React.ReactNode;
  className?: string;
};

type DropdownTriggerProps = {
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
};

type DropdownContentProps = {
  children: React.ReactNode;
  className?: string;
};

const Trigger = ({ children }: DropdownTriggerProps) => {
  return React.cloneElement(children, {
    tabIndex: 0,
    role: "button",
  });
};

const Content = ({ children, className }: DropdownContentProps) => {
  return (
    <div
      tabIndex={0}
      className={mergeClasses("moon-dropdown-content", className)}
    >
      {children}
    </div>
  );
};

const Root = ({ children, className }: DropdownProps) => {
  return (
    <div className={mergeClasses("moon-dropdown", className)}>{children}</div>
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
