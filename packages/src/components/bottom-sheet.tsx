import { FC, ReactNode, createContext, useContext, useRef } from "react";
import mergeClasses from "../helpers/mergeClasses";
import Close from "../assets/icons/CloseIcon";

export type BottomSheetContextType = {
  bottomSheetRef: React.RefObject<HTMLDialogElement | null> | null;
};

export type BottomSheetProps = {
  children: ReactNode;
  className?: string;
};

export type HandleProps = {
  className?: string;
};

export type CloseProps = BottomSheetProps & {
  onClick?: () => void;
};

const BottomSheetContext = createContext<BottomSheetContextType | null>(null);

export function useBottomSheetContext() {
  const ctx = useContext(BottomSheetContext);
  if (!ctx)
    throw new Error("BottomSheet components must be inside <BottomSheet>");
  return ctx;
}

export const BottomSheet: FC<BottomSheetProps> = ({ children }) => {
  const bottomSheetRef = useRef<HTMLDialogElement | null>(null);

  return (
    <BottomSheetContext.Provider value={{ bottomSheetRef }}>
      {children}
    </BottomSheetContext.Provider>
  );
};

export const BottomSheetContent: FC<BottomSheetProps> = ({
  children,
  className,
}) => {
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

export const BottomSheetTrigger: FC<BottomSheetProps> = ({
  children,
  className,
}) => {
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

export const BottomSheetHandle: FC<HandleProps> = ({ className }) => (
  <div className={mergeClasses("moon-bottom-sheet-handle", className)} />
);

export const BottomSheetTitle: FC<BottomSheetProps> = ({
  children,
  className,
}) => (
  <header className={mergeClasses("moon-bottom-sheet-title", className)}>
    {children}
  </header>
);

export const BottomSheetClose: FC<CloseProps> = ({ onClick, className }) => {
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
};
