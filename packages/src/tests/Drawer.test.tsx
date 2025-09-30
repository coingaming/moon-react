import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Drawer from "../components/Drawer";

describe("Drawer", () => {
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
  it("renders trigger button", () => {
    render(
      <Drawer>
        <Drawer.Trigger>Open Drawer</Drawer.Trigger>
        <Drawer.Content>
          <div>Drawer Content</div>
        </Drawer.Content>
      </Drawer>
    );
    expect(screen.getByText("Open Drawer")).toBeInTheDocument();
  });

  it("shows drawer content when trigger is clicked", () => {
    render(
      <Drawer>
        <Drawer.Trigger>Open Drawer</Drawer.Trigger>
        <Drawer.Content>
          <div>Drawer Content</div>
        </Drawer.Content>
      </Drawer>
    );
    fireEvent.click(screen.getByText("Open Drawer"));
    expect(screen.getByText("Drawer Content")).toBeInTheDocument();
  });

  it("closes drawer when close button is clicked", () => {
    render(
      <Drawer>
        <Drawer.Trigger>Open Drawer</Drawer.Trigger>
        <Drawer.Content>
          <div>Drawer Content</div>
        </Drawer.Content>
        <Drawer.Close />
      </Drawer>
    );
    fireEvent.click(screen.getByText("Open Drawer"));
    expect(screen.getByText("Drawer Content")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Close"));
    expect(
      screen.getByText("Drawer Content").closest("dialog")
    ).not.toHaveProperty("open", true);
  });

  it("renders header content", () => {
    render(
      <Drawer>
        <Drawer.Trigger>Open Drawer</Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header>Header</Drawer.Header>
        </Drawer.Content>
      </Drawer>
    );
    fireEvent.click(screen.getByText("Open Drawer"));
    expect(screen.getByText("Header")).toBeInTheDocument();
  });
});
