import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Dialog from "../components/Dialog";

describe("Dialog", () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.show = jest.fn(function mock(
      this: HTMLDialogElement
    ) {
      this.open = true;
    });

    HTMLDialogElement.prototype.showModal = jest.fn(function mock(
      this: HTMLDialogElement
    ) {
      this.open = true;
    });

    HTMLDialogElement.prototype.close = jest.fn(function mock(
      this: HTMLDialogElement
    ) {
      this.open = false;
    });
  });
  it("renders trigger element", () => {
    render(
      <Dialog>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Content>
          <div>Dialog Content</div>
        </Dialog.Content>
      </Dialog>
    );
    expect(screen.getByText("Open Dialog")).toBeInTheDocument();
  });

  it("shows dialog content when trigger is clicked", () => {
    render(
      <Dialog>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Content>
          <div>Dialog Content</div>
        </Dialog.Content>
      </Dialog>
    );
    fireEvent.click(screen.getByText("Open Dialog"));
    expect(screen.getByText("Dialog Content")).toBeInTheDocument();
  });

  it("closes dialog when close button is clicked", () => {
    render(
      <Dialog>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Content>
          <div>Dialog Content</div>
        </Dialog.Content>
        <Dialog.Close />
      </Dialog>
    );
    fireEvent.click(screen.getByText("Open Dialog"));
    expect(screen.getByText("Dialog Content")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Close"));
    expect(
      screen.getByText("Dialog Content").closest("dialog")
    ).not.toHaveProperty("open", true);
  });

  it("renders header content", () => {
    render(
      <Dialog>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>Header</Dialog.Header>
        </Dialog.Content>
      </Dialog>
    );
    fireEvent.click(screen.getByText("Open Dialog"));
    expect(screen.getByText("Header")).toBeInTheDocument();
  });
});
