import React from "react";
import { render, screen } from "@testing-library/react";
import { Snackbar } from "../components";

describe("Snackbar", () => {
  it("should not render when isOpen is false", () => {
    const { container } = render(
      <Snackbar isOpen={false}>Hidden Snackbar</Snackbar>
    );
    expect(container.firstChild).toBeNull();
  });

  it("should render when isOpen is true", () => {
    render(<Snackbar isOpen>Visible Snackbar</Snackbar>);
    expect(screen.getByText("Visible Snackbar")).toBeInTheDocument();
  });

  it("should apply default classes with variant=fill and context=brand", () => {
    const { container } = render(<Snackbar isOpen>Default Snackbar</Snackbar>);
    const snackbar = container.firstChild;
    expect(snackbar).toHaveClass("moon-snackbar");
    expect(snackbar).not.toHaveClass("moon-snackbar-soft");
    expect(snackbar).not.toHaveClass("moon-snackbar-positive");
  });

  it("should apply soft variant class", () => {
    const { container } = render(
      <Snackbar isOpen variant="soft">
        Soft Snackbar
      </Snackbar>
    );
    const snackbar = container.firstChild;
    expect(snackbar).toHaveClass("moon-snackbar-soft");
  });

  it("should apply custom context class", () => {
    const { container } = render(
      <Snackbar isOpen context="positive">
        Success Snackbar
      </Snackbar>
    );
    const snackbar = container.firstChild;
    expect(snackbar).toHaveClass("moon-snackbar-positive");
  });

  it("should render Action subcomponent with proper class", () => {
    render(
      <Snackbar isOpen>
        <Snackbar.Action>Undo</Snackbar.Action>
      </Snackbar>
    );
    const action = screen.getByText("Undo");
    expect(action).toHaveClass("moon-snackbar-action");
  });

  it("should render Meta subcomponent with proper class", () => {
    render(
      <Snackbar isOpen>
        <Snackbar.Meta>2 min ago</Snackbar.Meta>
      </Snackbar>
    );
    const meta = screen.getByText("2 min ago");
    expect(meta).toHaveClass("moon-snackbar-meta");
  });

  it("should render Group subcomponent with proper class", () => {
    render(
      <Snackbar isOpen>
        <Snackbar.Group>Group content</Snackbar.Group>
      </Snackbar>
    );
    const group = screen.getByText("Group content");
    expect(group).toHaveClass("moon-snackbar-group");
  });

  it("should render nested children correctly", () => {
    render(
      <Snackbar isOpen>
        <Snackbar.Meta>Meta</Snackbar.Meta>
        <Snackbar.Action>Action</Snackbar.Action>
      </Snackbar>
    );
    expect(screen.getByText("Meta")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
  });
});
