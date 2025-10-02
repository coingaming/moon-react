import { render, screen, fireEvent } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert component", () => {
  it("renders children inside Root", () => {
    render(
      <Alert>
        <span>Test Content</span>
      </Alert>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies default variant and context classes", () => {
    render(<Alert>Default Alert</Alert>);
    const alert = screen.getByText("Default Alert");
    expect(alert).toHaveClass("moon-alert");
    expect(alert).not.toHaveClass("moon-alert-soft");
    expect(alert).not.toHaveClass("moon-alert-outline");
    expect(alert).not.toHaveClass("moon-alert-error");
  });

  it("applies custom variant and context classes", () => {
    render(
      <Alert variant="soft" context="positive">
        Custom Alert
      </Alert>
    );
    const alert = screen.getByText("Custom Alert");
    expect(alert).toHaveClass(
      "moon-alert",
      "moon-alert-soft",
      "moon-alert-positive"
    );
  });

  describe("Alert.Content", () => {
    it("renders children correctly", () => {
      render(
        <Alert>
          <Alert.Content>Alert body</Alert.Content>
        </Alert>
      );
      expect(screen.getByText("Alert body")).toBeInTheDocument();
    });
  });

  describe("Alert.Meta", () => {
    it("renders metadata text", () => {
      render(
        <Alert>
          <Alert.Meta>Meta info</Alert.Meta>
        </Alert>
      );
      expect(screen.getByText("Meta info")).toHaveClass("moon-alert-meta");
    });
  });

  describe("Alert.Action", () => {
    it("calls onClick when clicked", () => {
      const handleClick = jest.fn();
      render(
        <Alert>
          <Alert.Action onClick={handleClick}>Click Me</Alert.Action>
        </Alert>
      );
      fireEvent.click(screen.getByText("Click Me"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Alert.Close", () => {
    it("renders custom children instead of CloseIcon", () => {
      render(
        <Alert>
          <Alert.Close>Custom Close</Alert.Close>
        </Alert>
      );
      expect(screen.getByText("Custom Close")).toBeInTheDocument();
    });
  });
});
