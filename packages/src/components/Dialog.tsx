import React, { createContext, useContext, useRef } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "../assets/icons/Close";
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

const Trigger = ({ children }: DialogProps) => {
  const { dialogRef } = useContext(DialogContext);

  return <p onClick={() => dialogRef?.current?.showModal()}>{children}</p>;
};

const Content = ({ children }: DialogProps) => {
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

const Header = ({ children }: DialogProps) => (
  <header className="moon-dialog-header">{children}</header>
);

const Close = () => {
  const { dialogRef } = useContext(DialogContext);

  return (
    <button
      className="moon-dialog-close"
      aria-label="Close"
      onClick={() => dialogRef?.current?.close()}
    >
      <CloseIcon />
    </button>
  );
};

const Root = ({ children }: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <DialogContext.Provider value={{ dialogRef }}>
      {children}
    </DialogContext.Provider>
  );
};

Root.displayName = "Dialog";
Trigger.displayName = "Dialog.Trigger";
Close.displayName = "Dialog.Close";
Header.displayName = "Dialog.Header";
Content.displayName = "Dialog.Content";

const Dialog = Object.assign(Root, { Trigger, Content, Close, Header });

export default Dialog;
