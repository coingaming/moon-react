import { createContext, FC, useContext, useRef } from "react";
import Close from "../assets/icons/CloseIcon";
import { createPortal } from "react-dom";
import mergeClasses from "../helpers/mergeClasses";

export type DialogContextType = {
  dialogRef: React.RefObject<HTMLDialogElement | null> | null;
};

const DEFAULT_DIALOG_CONTEXT = {
  dialogRef: null,
};

const DialogContext = createContext<DialogContextType>(DEFAULT_DIALOG_CONTEXT);

export type DialogProps = {
  children: React.ReactNode;
};

export const Dialog: FC<DialogProps> = ({ children }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <DialogContext.Provider value={{ dialogRef }}>
      {children}
    </DialogContext.Provider>
  );
};

export const DialogTrigger: FC<DialogProps> = ({ children }) => {
  const { dialogRef } = useContext(DialogContext);

  return <p onClick={() => dialogRef?.current?.showModal()}>{children}</p>;
};

export const DialogContent: FC<DialogProps> = ({ children }) => {
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

export const DialogHeader: FC<DialogProps> = ({ children }) => (
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
