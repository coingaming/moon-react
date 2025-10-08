import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Tag from "../components/Tag";

describe("Tag", () => {
  it("renders children", () => {
    render(<Tag>Test Tag</Tag>);
    expect(screen.getByText("Test Tag")).toBeInTheDocument();
  });

  it("applies size, variant, and context classes", () => {
    render(
      <Tag size="2xs" variant="outline" context="info">
        Styled Tag
      </Tag>
    );
    const tag = screen.getByText("Styled Tag");
    expect(tag).toHaveClass("moon-tag-2xs");
    expect(tag).toHaveClass("moon-tag-outline");
    expect(tag).toHaveClass("moon-tag-info");
  });

  it("applies custom className", () => {
    render(<Tag className="custom-class">Custom Tag</Tag>);
    const tag = screen.getByText("Custom Tag");
    expect(tag).toHaveClass("custom-class");
  });
});
