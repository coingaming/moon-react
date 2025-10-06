import React from "react";
import { render, screen } from "@testing-library/react";
import { Tooltip } from "../components";

describe("Tooltip", () => {
  it("should render with default position (top) and without pointer", () => {
    const { container } = render(<Tooltip>Tooltip content</Tooltip>);
    const tooltip = container.firstChild;
    expect(tooltip).toHaveClass("moon-tooltip");
    expect(tooltip).not.toHaveClass("moon-tooltip-pointer");
    expect(tooltip).not.toHaveClass("moon-tooltip-bottom");
    expect(screen.getByText("Tooltip content")).toBeInTheDocument();
  });

  it("should apply pointer class when hasPointer is true", () => {
    const { container } = render(
      <Tooltip hasPointer>Tooltip with pointer</Tooltip>
    );
    const tooltip = container.firstChild;
    expect(tooltip).toHaveClass("moon-tooltip-pointer");
  });

  it("should apply position class when position is not top", () => {
    const { container } = render(
      <Tooltip position="bottom">Tooltip bottom</Tooltip>
    );
    const tooltip = container.firstChild;
    expect(tooltip).toHaveClass("moon-tooltip-bottom");
  });

  it("should render Trigger subcomponent with provided className", () => {
    render(
      <Tooltip>
        <Tooltip.Trigger className="custom-trigger">
          Trigger text
        </Tooltip.Trigger>
      </Tooltip>
    );
    const trigger = screen.getByText("Trigger text");
    expect(trigger).toHaveClass("custom-trigger");
  });

  it("should render Content subcomponent with base and custom classes", () => {
    render(
      <Tooltip>
        <Tooltip.Content className="extra-class">Content text</Tooltip.Content>
      </Tooltip>
    );
    const content = screen.getByText("Content text");
    expect(content).toHaveClass("moon-tooltip-content");
    expect(content).toHaveClass("extra-class");
  });

  it("should render nested children correctly", () => {
    render(
      <Tooltip>
        <Tooltip.Trigger>Trigger here</Tooltip.Trigger>
        <Tooltip.Content>Content here</Tooltip.Content>
      </Tooltip>
    );
    expect(screen.getByText("Trigger here")).toBeInTheDocument();
    expect(screen.getByText("Content here")).toBeInTheDocument();
  });
});
