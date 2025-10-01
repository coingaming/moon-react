import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import BottomSheet from "../components/BottomSheet";

describe("BottomSheet", () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.show = jest.fn();
    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn(function mock(
      this: HTMLDialogElement
    ) {
      this.open = false;
    });
  });

  it("renders trigger button", () => {
    render(
      <BottomSheet>
        <BottomSheet.Trigger>Open Sheet</BottomSheet.Trigger>
        <BottomSheet.Content>
          <div>Sheet Content</div>
        </BottomSheet.Content>
      </BottomSheet>
    );
    expect(screen.getByText("Open Sheet")).toBeInTheDocument();
  });

  it("shows bottom sheet content when trigger is clicked", () => {
    render(
      <BottomSheet>
        <BottomSheet.Trigger>Open Sheet</BottomSheet.Trigger>
        <BottomSheet.Content>
          <div>Sheet Content</div>
        </BottomSheet.Content>
      </BottomSheet>
    );
    fireEvent.click(screen.getByText("Open Sheet"));
    expect(screen.getByText("Sheet Content")).toBeInTheDocument();
  });

  it("closes bottom sheet when close button is clicked", () => {
    render(
      <BottomSheet>
        <BottomSheet.Trigger>Open Sheet</BottomSheet.Trigger>
        <BottomSheet.Content>
          <div>Sheet Content</div>
        </BottomSheet.Content>
        <BottomSheet.Close aria-label="Close"> </BottomSheet.Close>
      </BottomSheet>
    );
    fireEvent.click(screen.getByText("Open Sheet"));
    expect(screen.getByText("Sheet Content")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Close"));
    expect(
      screen.getByText("Sheet Content").closest("dialog")
    ).not.toHaveProperty("open", true);
  });

  it("renders header content", () => {
    render(
      <BottomSheet>
        <BottomSheet.Trigger>Open Sheet</BottomSheet.Trigger>
        <BottomSheet.Content>
          <BottomSheet.Header>Header</BottomSheet.Header>
        </BottomSheet.Content>
      </BottomSheet>
    );
    fireEvent.click(screen.getByText("Open Sheet"));
    expect(screen.getByText("Header")).toBeInTheDocument();
  });
});
