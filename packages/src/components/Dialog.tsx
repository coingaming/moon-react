import { createContext, useContext, useRef } from "react";
import { createPortal } from "react-dom";
import Close from "../assets/icons/CloseIcon";
import mergeClasses from "../helpers/mergeClasses";

type DialogContextType = {
  dialogRef: React.RefObject<HTMLDialogElement | null> | null;
};

const DEFAULT_DIALOG_CONTEXT = {
  dialogRef: null,
};

const DialogContext = createContext<DialogContextType>(DEFAULT_DIALOG_CONTEXT);

type DialogProps = {
  children: React.ReactNode;
};

export const Dialog = ({ children }: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <DialogContext.Provider value={{ dialogRef }}>
      {children}
    </DialogContext.Provider>
  );
};

export const DialogTrigger = ({ children }: DialogProps) => {
  const { dialogRef } = useContext(DialogContext);

  return <p onClick={() => dialogRef?.current?.showModal()}>{children}</p>;
};

export const DialogContent = ({ children }: DialogProps) => {
  const { dialogRef } = useContext(DialogContext);

  return createPortal(
    <dialog className={mergeClasses("moon-dialog")} ref={dialogRef}>
      <div className="moon-dialog-box">{children}</div>
      <form method="dialog" className="moon-backdrop">
        <button></button>
      </form>
    </dialog>,
    document.body
  );
};
DialogContent.displayName = "DialogContent";

export const DialogHeader = ({ children }: DialogProps) => (
  <header className="moon-dialog-title">{children}</header>
);

export function DialogClose() {
  const { dialogRef } = useContext(DialogContext);

  return (
    <button
      className="moon-dialog-close"
      onClick={() => dialogRef?.current?.close()}
    >
      <Close />
    </button>
  );
}
