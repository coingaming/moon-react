import React, { createContext, useContext, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
import mergeClasses from "../helpers/mergeClasses";
import CloseIcon from "../assets/icons/Close";

type DrawerContextType = {
  drawerRef: React.RefObject<HTMLDialogElement | null> | null;
};

const DrawerContext = createContext<DrawerContextType>({
  drawerRef: null,
});

function useDrawerContext() {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error("Drawer components must be used within <Drawer>");
  return ctx;
}

type DrawerProps = {
  children: ReactNode;
};

type DrawerTriggerProps = {
  children: ReactNode;
  className?: string;
};

const Trigger = ({ children, className }: DrawerTriggerProps) => {
  const { drawerRef } = useDrawerContext();
  return (
    <button
      onClick={() => drawerRef?.current?.showModal()}
      className={className}
    >
      {children}
    </button>
  );
};

type DrawerContentProps = {
  children: ReactNode;
  className?: string;
};

type DrawerTitleProps = {
  children: ReactNode;
  className?: string;
};

const Header = ({ children, className }: DrawerTitleProps) => (
  <div className={mergeClasses("moon-drawer-header", className)}>
    {children}
  </div>
);

const Content = ({ children, className }: DrawerContentProps) => {
  const { drawerRef } = useDrawerContext();
  return createPortal(
    <dialog className={mergeClasses("moon-drawer", className)} ref={drawerRef}>
      <div className="moon-drawer-box">{children}</div>
      <form method="dialog" className="moon-backdrop">
        <button></button>
      </form>
    </dialog>,
    document.body
  );
};

type DrawerCloseProps = {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
};

const Close = ({ onClick, className }: DrawerCloseProps) => {
  const { drawerRef } = useDrawerContext();
  const handleClick = () => {
    drawerRef?.current?.close();
    onClick?.();
  };
  return (
    <button
      onClick={handleClick}
      className={mergeClasses("moon-drawer-close", className)}
    >
      <CloseIcon />
    </button>
  );
};

const Root = ({ children }: DrawerProps) => {
  const drawerRef = useRef<HTMLDialogElement | null>(null);
  return (
    <DrawerContext.Provider value={{ drawerRef }}>
      {children}
    </DrawerContext.Provider>
  );
};

Root.displayName = "Drawer";
Trigger.displayName = "Drawer.Trigger";
Close.displayName = "Drawer.Close";
Header.displayName = "Drawer.Header";
Content.displayName = "Drawer.Content";

const Drawer = Object.assign(Root, { Trigger, Content, Close, Header });

export default Drawer;
