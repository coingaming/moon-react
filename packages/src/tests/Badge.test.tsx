import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Badge from "../components/Badge";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText("Test Badge")).toBeInTheDocument();
  });

  it("applies variant and context classes", () => {
    render(
      <Badge variant="outline" context="neutral">
        Styled Badge
      </Badge>
    );
    const badge = screen.getByText("Styled Badge");
    expect(badge).toHaveClass("moon-badge-outline");
    expect(badge).toHaveClass("moon-badge-neutral");
  });

  it("applies custom className", () => {
    render(<Badge className="custom-class">Custom Badge</Badge>);
    const badge = screen.getByText("Custom Badge");
    expect(badge).toHaveClass("custom-class");
  });
});
