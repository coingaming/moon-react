import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import IconButton from "../components/IconButton";

describe("IconButton", () => {
  it("renders with default props", () => {
    render(<IconButton aria-label="icon button" />);
    const button = screen.getByRole("button", { name: /icon button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("moon-icon-button");
  });

  it("applies variant, size, and context classes", () => {
    render(
      <IconButton
        aria-label="icon button"
        variant="outline"
        size="lg"
        context="info"
      />
    );
    const button = screen.getByRole("button", { name: /icon button/i });
    expect(button).toHaveClass("moon-icon-button-outline");
    expect(button).toHaveClass("moon-icon-button-lg");
    expect(button).toHaveClass("moon-icon-button-info");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<IconButton aria-label="icon button" onClick={handleClick} />);
    const button = screen.getByRole("button", { name: /icon button/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("passes additional props to the button", () => {
    render(
      <IconButton aria-label="icon button" data-testid="icon-btn" disabled />
    );
    const button = screen.getByTestId("icon-btn");
    expect(button).toBeDisabled();
  });
});
