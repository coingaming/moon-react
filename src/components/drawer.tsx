import React, { createContext, useContext, useRef, ReactNode, FC } from "react";
import mergeClasses from "../helpers/mergeClasses";
import Close from "../assets/icons/CloseIcon";
import { createPortal } from "react-dom";

type DrawerContextType = {
  drawerRef: React.RefObject<HTMLDialogElement | null> | null;
};

const DrawerContext = createContext<DrawerContextType>({ drawerRef: null });

export function useDrawerContext() {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error("Drawer components must be used within <Drawer>");
  return ctx;
}

type DrawerProps = {
  children: ReactNode;
};

export const Drawer: FC<DrawerProps> = ({ children }) => {
  const drawerRef = useRef<HTMLDialogElement | null>(null);
  return (
    <DrawerContext.Provider value={{ drawerRef }}>
      {children}
    </DrawerContext.Provider>
  );
};

type DrawerTriggerProps = {
  children: ReactNode;
  className?: string;
};

export const DrawerTrigger: FC<DrawerTriggerProps> = ({
  children,
  className,
}) => {
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

export const DrawerTitle: FC<DrawerTitleProps> = ({ children, className }) => {
  return (
    <div className={mergeClasses("moon-drawer-title", className)}>
      {children}
    </div>
  );
};

export const DrawerContent: FC<DrawerContentProps> = ({
  children,
  className,
}) => {
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

export const DrawerClose: FC<DrawerCloseProps> = ({ onClick, className }) => {
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
      <Close />
    </button>
  );
};

export default Drawer;
