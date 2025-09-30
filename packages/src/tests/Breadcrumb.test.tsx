import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Breadcrumb from "../components/Breadcrumb";

describe("Breadcrumb", () => {
  it("renders breadcrumb items", () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item index={1}>Home</Breadcrumb.Item>
        <Breadcrumb.Item index={2}>Library</Breadcrumb.Item>
        <Breadcrumb.Item index={3}>Data</Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Library")).toBeInTheDocument();
    expect(screen.getByText("Data")).toBeInTheDocument();
  });

  it("highlights the default current page", () => {
    render(
      <Breadcrumb defaultCurrentPage={2}>
        <Breadcrumb.Item index={1}>Home</Breadcrumb.Item>
        <Breadcrumb.Item index={2}>Library</Breadcrumb.Item>
        <Breadcrumb.Item index={3}>Data</Breadcrumb.Item>
      </Breadcrumb>
    );
    const active = screen.getByText("Library");
    expect(active).toHaveClass("moon-breadcrumb-item-active");
    expect(active).toHaveAttribute("aria-current", "page");
  });

  it("activates item on click", () => {
    render(
      <Breadcrumb defaultCurrentPage={1}>
        <Breadcrumb.Item index={1}>Home</Breadcrumb.Item>
        <Breadcrumb.Item index={2}>Library</Breadcrumb.Item>
        <Breadcrumb.Item index={3}>Data</Breadcrumb.Item>
      </Breadcrumb>
    );
    const library = screen.getByText("Library");
    fireEvent.click(library);
    expect(library).toHaveClass("moon-breadcrumb-item-active");
    expect(library).toHaveAttribute("aria-current", "page");
  });
});
