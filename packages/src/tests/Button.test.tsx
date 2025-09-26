import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../components/Button";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("moon-button");
  });

  it("applies variant, size, and context classes", () => {
    render(
      <Button variant="outline" size="lg" context="caution">
        Test
      </Button>
    );
    const button = screen.getByRole("button", { name: /test/i });
    expect(button).toHaveClass("moon-button-outline");
    expect(button).toHaveClass("moon-button-lg");
    expect(button).toHaveClass("moon-button-caution");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    const button = screen.getByRole("button", { name: /click/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("passes additional props to the button", () => {
    render(
      <Button data-testid="btn" disabled>
        Disabled
      </Button>
    );
    const button = screen.getByTestId("btn");
    expect(button).toBeDisabled();
  });
});
