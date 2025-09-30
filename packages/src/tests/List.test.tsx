import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { List } from "../components";

describe("List component", () => {
  it("renders with default size (md) and children", () => {
    render(
      <List data-testid="list">
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List>
    );

    const list = screen.getByTestId("list");
    expect(list).toBeInTheDocument();
    expect(list.tagName).toBe("UL");

    expect(list).toHaveClass("moon-list");

    expect(list.className).not.toMatch(/moon-list-(sm|lg)/);

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("applies size classes correctly", () => {
    const { rerender } = render(
      <List size="sm" data-testid="list">
        <List.Item>Small</List.Item>
      </List>
    );
    expect(screen.getByTestId("list")).toHaveClass("moon-list-sm");

    rerender(
      <List size="lg" data-testid="list">
        <List.Item>Large</List.Item>
      </List>
    );
    expect(screen.getByTestId("list")).toHaveClass("moon-list-lg");
  });

  it("renders List.Item with custom className and props", async () => {
    const onClick = jest.fn();
    render(
      <List>
        <List.Item className="custom-item" data-testid="item" onClick={onClick}>
          Click me
        </List.Item>
      </List>
    );

    const item = screen.getByTestId("item");
    expect(item).toHaveClass("moon-list-item");
    expect(item).toHaveClass("custom-item");

    await userEvent.click(item);
    expect(onClick).toHaveBeenCalled();
  });

  it("renders List.Meta with correct className", () => {
    render(
      <List>
        <List.Meta data-testid="meta">Meta content</List.Meta>
      </List>
    );

    const meta = screen.getByTestId("meta");
    expect(meta).toHaveClass("moon-list-item-meta");
    expect(meta).toHaveTextContent("Meta content");
  });

  it("forwards additional props to the root element", () => {
    render(
      <List aria-label="custom-list" data-testid="list">
        <List.Item>Item</List.Item>
      </List>
    );
    const list = screen.getByTestId("list");
    expect(list).toHaveAttribute("aria-label", "custom-list");
  });
});
