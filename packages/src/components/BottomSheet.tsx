import React, { createContext, useContext, useRef } from "react";
import CloseIcon from "../assets/icons/Close";
import mergeClasses from "../helpers/mergeClasses";

type BottomSheetContextType = {
  bottomSheetRef: React.RefObject<HTMLDialogElement | null> | null;
};

type BottomSheetProps = {
  children: React.ReactNode;
  className?: string;
};

type HandleProps = {
  className?: string;
};

type CloseProps = BottomSheetProps & {
  onClick?: () => void;
};

const BottomSheetContext = createContext<BottomSheetContextType | null>(null);

function useBottomSheetContext() {
  const ctx = useContext(BottomSheetContext);
  if (!ctx)
    throw new Error("BottomSheet components must be inside <BottomSheet>");
  return ctx;
}

const Content = ({ children, className }: BottomSheetProps) => {
  const { bottomSheetRef } = useBottomSheetContext();

  return (
    <dialog
      className={mergeClasses("moon-bottom-sheet", className)}
      ref={bottomSheetRef}
    >
      <div className="moon-bottom-sheet-box">{children}</div>
      <form method="dialog" className="moon-backdrop">
        <button></button>
      </form>
    </dialog>
  );
};

const Trigger = ({ children, className }: BottomSheetProps) => {
  const { bottomSheetRef } = useBottomSheetContext();

  return (
    <button
      onClick={() => bottomSheetRef?.current?.showModal()}
      className={className}
    >
      {children}
    </button>
  );
};

const Handle = ({ className }: HandleProps) => (
  <div className={mergeClasses("moon-bottom-sheet-handle", className)} />
);

const Header = ({ children, className }: BottomSheetProps) => (
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

const Root = ({ children }: BottomSheetProps) => {
  const bottomSheetRef = useRef<HTMLDialogElement | null>(null);

  return (
    <BottomSheetContext.Provider value={{ bottomSheetRef }}>
      {children}
    </BottomSheetContext.Provider>
  );
};

Root.displayName = "BottomSheet";
Trigger.displayName = "BottomSheet.Trigger";
Content.displayName = "BottomSheet.Content";
Close.displayName = "BottomSheet.Close";
Header.displayName = "BottomSheet.Header";
Handle.displayName = "BottomSheet.Handle";

const BottomSheet = Object.assign(Root, {
  Trigger,
  Content,
  Close,
  Header,
  Handle,
});

export default BottomSheet;
