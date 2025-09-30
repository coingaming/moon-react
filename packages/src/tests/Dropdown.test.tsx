import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Dropdown from "../components/Dropdown";

describe("Dropdown", () => {
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
  it("renders trigger", () => {
    render(
      <Dropdown>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Content>
          <div>Option 1</div>
        </Dropdown.Content>
      </Dropdown>
    );
    expect(screen.getByText("Open Dropdown")).toBeInTheDocument();
  });

  it("shows content when trigger is clicked", () => {
    render(
      <Dropdown>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Content>
          <div>Option 1</div>
          <div>Option 2</div>
        </Dropdown.Content>
      </Dropdown>
    );
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("Open Dropdown"));
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("hides content when trigger is clicked again", () => {
    render(
      <Dropdown defaultOpen={true}>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Content>
          <div>Option 1</div>
        </Dropdown.Content>
      </Dropdown>
    );
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Open Dropdown"));
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
  });

  it("applies custom class to content", () => {
    render(
      <Dropdown defaultOpen={true}>
        <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
        <Dropdown.Content className="custom-class">
          <div>Option 1</div>
        </Dropdown.Content>
      </Dropdown>
    );
    expect(screen.getByText("Option 1").parentElement).toHaveClass(
      "moon-dropdown custom-class"
    );
  });
});
