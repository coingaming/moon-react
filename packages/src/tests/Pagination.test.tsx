import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from "../components/Pagination";

describe("Pagination", () => {
  it("renders all pagination items", () => {
    render(
      <Pagination length={3}>
        <Pagination.Previous data-testid="prev" />
        <Pagination.Item index={0}>1</Pagination.Item>
        <Pagination.Item index={1}>2</Pagination.Item>
        <Pagination.Item index={2}>3</Pagination.Item>
        <Pagination.Next data-testid="next" />
      </Pagination>
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByTestId("prev")).toBeInTheDocument();
    expect(screen.getByTestId("next")).toBeInTheDocument();
  });

  it("highlights the default active page", () => {
    render(
      <Pagination length={3} defaultPage={1}>
        <Pagination.Item index={0}>1</Pagination.Item>
        <Pagination.Item index={1}>2</Pagination.Item>
        <Pagination.Item index={2}>3</Pagination.Item>
      </Pagination>
    );
    const active = screen.getByText("2");
    fireEvent.click(active);
    expect(active).toHaveClass(
      "moon-pagination-item moon-pagination-item-active"
    );
  });

  it("activates page on item click", () => {
    render(
      <Pagination length={3} defaultPage={0}>
        <Pagination.Item index={0}>1</Pagination.Item>
        <Pagination.Item index={1}>2</Pagination.Item>
        <Pagination.Item index={2}>3</Pagination.Item>
      </Pagination>
    );
    const page2 = screen.getByText("2");
    fireEvent.click(page2);
    expect(page2).toHaveClass(
      "moon-pagination-item moon-pagination-item-active"
    );
  });

  it("navigates to next and previous pages", () => {
    render(
      <Pagination length={3} defaultPage={1}>
        <Pagination.Previous data-testid="prev" />
        <Pagination.Item index={0}>1</Pagination.Item>
        <Pagination.Item index={1}>2</Pagination.Item>
        <Pagination.Item index={2}>3</Pagination.Item>
        <Pagination.Next data-testid="next" />
      </Pagination>
    );
    const prev = screen.getByTestId("prev");
    const next = screen.getByTestId("next");
    const page1 = screen.getByText("1");
    const page2 = screen.getByText("2");
    const page3 = screen.getByText("3");

    fireEvent.click(next);
    expect(page3).toHaveClass(
      "moon-pagination-item moon-pagination-item-active"
    );

    fireEvent.click(prev);
    expect(page2).toHaveClass(
      "moon-pagination-item moon-pagination-item-active"
    );
  });
});
