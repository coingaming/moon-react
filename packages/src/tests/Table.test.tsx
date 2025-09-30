import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "../Table";

describe("Table component", () => {
  it("renders with default size (md)", () => {
    render(
      <Table data-testid="table">
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Header</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Data</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );

    const table = screen.getByTestId("table");
    expect(table.tagName).toBe("TABLE");
    expect(table).toHaveClass("moon-table");
    // md no agrega clase extra
    expect(table.className).not.toMatch(/moon-table-(sm|lg|xl)/);

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Data")).toBeInTheDocument();
  });

  it("applies size classes correctly", () => {
    const { rerender } = render(<Table size="sm" data-testid="table" />);
    expect(screen.getByTestId("table")).toHaveClass("moon-table-sm");

    rerender(<Table size="lg" data-testid="table" />);
    expect(screen.getByTestId("table")).toHaveClass("moon-table-lg");

    rerender(<Table size="xl" data-testid="table" />);
    expect(screen.getByTestId("table")).toHaveClass("moon-table-xl");
  });

  it("renders all subcomponents with custom className", () => {
    render(
      <Table data-testid="table">
        <Table.Caption className="caption-class" data-testid="caption">
          My caption
        </Table.Caption>
        <Table.Head className="head-class" data-testid="head">
          <Table.Row className="row-class" data-testid="row">
            <Table.HeadCell className="headcell-class" data-testid="headcell">
              H1
            </Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body className="body-class" data-testid="body">
          <Table.Row>
            <Table.Cell className="cell-class" data-testid="cell">
              D1
            </Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot className="foot-class" data-testid="foot">
          <Table.Row>
            <Table.Cell>Footer</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    );

    expect(screen.getByTestId("caption")).toHaveClass("caption-class");
    expect(screen.getByTestId("head")).toHaveClass("head-class");
    expect(screen.getByTestId("row")).toHaveClass("row-class");
    expect(screen.getByTestId("headcell")).toHaveClass("headcell-class");
    expect(screen.getByTestId("body")).toHaveClass("body-class");
    expect(screen.getByTestId("cell")).toHaveClass("cell-class");
    expect(screen.getByTestId("foot")).toHaveClass("foot-class");
  });

  it("forwards additional props to the root element", () => {
    render(
      <Table aria-label="custom-table" data-testid="table">
        <Table.Body>
          <Table.Row>
            <Table.Cell>Data</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );

    const table = screen.getByTestId("table");
    expect(table).toHaveAttribute("aria-label", "custom-table");
  });
});
