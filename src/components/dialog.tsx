import { createContext, useContext, useRef } from "react";
import Close from "../assets/icons/CloseIcon";
import { createPortal } from "react-dom";
import mergeClasses from "../helpers/mergeClasses";

type DialogContextType = {
  dialogRef: React.RefObject<HTMLDialogElement | null> | null;
};

const DEFAULT_DIALOG_CONTEXT = {
  dialogRef: null,
};

const DialogContext = createContext<DialogContextType>(DEFAULT_DIALOG_CONTEXT);

export function Dialog({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <DialogContext.Provider value={{ dialogRef }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ children }: { children: React.ReactNode }) {
  const { dialogRef } = useContext(DialogContext);

  return <p onClick={() => dialogRef?.current?.showModal()}>{children}</p>;
}

export function DialogContent({ children }: { children: React.ReactNode }) {
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
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
  return <header className="moon-dialog-title">{children}</header>;
}

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
