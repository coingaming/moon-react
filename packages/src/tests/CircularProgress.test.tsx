import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CircularProgress from "../components/CircularProgress";

describe("CircularProgress", () => {
  it("renders with value", () => {
    render(<CircularProgress value={50} />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toHaveAttribute("data-value", "50");
    expect(progress).toHaveClass("moon-circular-progress");
  });

  it("applies size class", () => {
    render(<CircularProgress value={75} size="lg" />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toHaveClass("moon-circular-progress-lg");
  });

  it("applies custom className", () => {
    render(<CircularProgress value={25} className="custom-class" />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toHaveClass("custom-class");
  });
});
