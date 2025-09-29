import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Menu from "../components/Menu";

describe("Menu", () => {
  it("renders menu items", () => {
    render(
      <Menu>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
      </Menu>
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("applies size class", () => {
    render(
      <Menu size="lg">
        <Menu.Item>Item</Menu.Item>
      </Menu>
    );
    const menu = screen.getByRole("list");
    expect(menu).toHaveClass("moon-menu-lg");
  });

  it("applies custom className", () => {
    render(
      <Menu className="custom-class">
        <Menu.Item>Item</Menu.Item>
      </Menu>
    );
    const menu = screen.getByRole("list");
    expect(menu).toHaveClass("custom-class");
  });

  it("renders meta content", () => {
    render(
      <Menu>
        <Menu.Item>Item</Menu.Item>
        <Menu.Meta>Meta Info</Menu.Meta>
      </Menu>
    );
    expect(screen.getByText("Meta Info")).toBeInTheDocument();
  });
});
