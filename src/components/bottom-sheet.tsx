import { ReactNode, createContext, useContext, useRef } from "react";
import mergeClasses from "../helpers/mergeClasses";
import Close from "../assets/icons/CloseIcon";

type BottomSheetContextType = {
  bottomSheetRef: React.RefObject<HTMLDialogElement | null> | null;
};

type BottomSheetProps = {
  children: ReactNode;
  className?: string;
};

type TriggerProps = {
  children: ReactNode;
  className?: string;
};

type HandleProps = {
  className?: string;
};

type TitleProps = {
  children: ReactNode;
  className?: string;
};

type CloseProps = {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
};

const BottomSheetContext = createContext<BottomSheetContextType | null>(null);

export function useBottomSheetContext() {
  const ctx = useContext(BottomSheetContext);
  if (!ctx)
    throw new Error("BottomSheet components must be inside <BottomSheet>");
  return ctx;
}

export function BottomSheet({ children }: BottomSheetProps) {
  const bottomSheetRef = useRef<HTMLDialogElement | null>(null);

  return (
    <BottomSheetContext.Provider value={{ bottomSheetRef }}>
      {children}
    </BottomSheetContext.Provider>
  );
}

export function BottomSheetContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
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
}

export function BottomSheetTrigger({ children, className }: TriggerProps) {
  const { bottomSheetRef } = useBottomSheetContext();

  return (
    <button
      onClick={() => bottomSheetRef?.current?.showModal()}
      className={className}
    >
      {children}
    </button>
  );
}

export function BottomSheetHandle({ className }: HandleProps) {
  return (
    <div className={mergeClasses("moon-bottom-sheet-handle", className)} />
  );
}

export function BottomSheetTitle({ children, className }: TitleProps) {
  return (
    <header className={mergeClasses("moon-bottom-sheet-title", className)}>
      {children}
    </header>
  );
}

export function BottomSheetClose({ onClick, className }: CloseProps) {
  const { bottomSheetRef } = useBottomSheetContext();

  const handleClick = () => {
    bottomSheetRef?.current?.close();
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={mergeClasses("moon-bottom-sheet-close", className)}
    >
      <Close />
    </button>
  );
}
