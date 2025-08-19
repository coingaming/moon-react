import { createContext, useContext, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
import mergeClasses from "../helpers/mergeClasses";
import Close from "../assets/icons/CloseIcon";

type DrawerContextType = {
  drawerRef: React.RefObject<HTMLDialogElement | null> | null;
};

export const DrawerContext = createContext<DrawerContextType>({
  drawerRef: null,
});

export function useDrawerContext() {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error("Drawer components must be used within <Drawer>");
  return ctx;
}

type DrawerProps = {
  children: ReactNode;
};

export const Drawer = ({ children }: DrawerProps) => {
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

export const DrawerTrigger = ({ children, className }: DrawerTriggerProps) => {
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

export const DrawerTitle = ({ children, className }: DrawerTitleProps) => (
  <div className={mergeClasses("moon-drawer-title", className)}>{children}</div>
);

export const DrawerContent = ({ children, className }: DrawerContentProps) => {
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
DrawerContent.displayName = "DrawerContent";

type DrawerCloseProps = {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
};

export const DrawerClose = ({ onClick, className }: DrawerCloseProps) => {
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
