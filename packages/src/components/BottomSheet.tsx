import React, { createContext, useContext, useRef } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "../assets/icons/Close";
import mergeClasses from "../helpers/mergeClasses";

type BottomSheetContextType = {
  bottomSheetRef: React.RefObject<HTMLDialogElement | null> | null;
  hasHandle: boolean;
};

type BottomSheetProps = {
  children: React.ReactNode;
  className?: string;
  hasHandle?: boolean;
};

type ComponentProps = {
  children?: React.ReactNode;
  className?: string;
};

type CloseProps = ComponentProps & {
  onClick?: () => void;
};

type BottomSheetTriggerProps = {
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
};

const BottomSheetContext = createContext<BottomSheetContextType | null>(null);

function useBottomSheetContext() {
  const ctx = useContext(BottomSheetContext);
  if (!ctx)
    throw new Error("BottomSheet components must be inside <BottomSheet>");
  return ctx;
}

const Content = ({ children, className }: ComponentProps) => {
  const { bottomSheetRef, hasHandle } = useBottomSheetContext();
  return createPortal(
    <dialog
      className={mergeClasses("moon-bottom-sheet", className)}
      ref={bottomSheetRef}
    >
      <div className="moon-bottom-sheet-box">
        {hasHandle && <div className="moon-bottom-sheet-handle"></div>}
        {children}
      </div>
      <form method="dialog" className="moon-backdrop">
        <button></button>
      </form>
    </dialog>,
    document.body
  );
};

const Trigger = ({ children }: BottomSheetTriggerProps) => {
  const { bottomSheetRef } = useBottomSheetContext();
  const handleClick = () => bottomSheetRef?.current?.showModal();
  return React.cloneElement(children, {
    onClick: handleClick,
  });
};

const Header = ({ children, className }: ComponentProps) => (
  <header className={mergeClasses("moon-bottom-sheet-header", className)}>
    {children}
  </header>
);

const Close = ({ onClick, className }: CloseProps) => {
  const { bottomSheetRef } = useBottomSheetContext();
  const handleClick = () => {
    bottomSheetRef?.current?.close();
    onClick?.();
  };
  return (
    <button
      className={mergeClasses("moon-bottom-sheet-close", className)}
      aria-label="Close"
      onClick={handleClick}
    >
      <CloseIcon />
    </button>
  );
};

const Root = ({ children, hasHandle = false }: BottomSheetProps) => {
  const bottomSheetRef = useRef<HTMLDialogElement | null>(null);
  return (
    <BottomSheetContext.Provider value={{ bottomSheetRef, hasHandle }}>
      {children}
    </BottomSheetContext.Provider>
  );
};

Root.displayName = "BottomSheet";
Trigger.displayName = "BottomSheet.Trigger";
Content.displayName = "BottomSheet.Content";
Close.displayName = "BottomSheet.Close";
Header.displayName = "BottomSheet.Header";

const BottomSheet = Object.assign(Root, {
  Trigger,
  Content,
  Close,
  Header,
});

export default BottomSheet;
