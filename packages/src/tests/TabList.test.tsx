import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import TabList from "../components/TabList";

describe("TabList", () => {
  it("renders all tabs", () => {
    render(
      <TabList>
        <TabList.Item index={0}>Tab 1</TabList.Item>
        <TabList.Item index={1}>Tab 2</TabList.Item>
        <TabList.Item index={2}>Tab 3</TabList.Item>
      </TabList>
    );
    expect(screen.getByRole("tab", { name: "Tab 1" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Tab 2" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Tab 3" })).toBeInTheDocument();
  });

  it("highlights the default active tab", () => {
    render(
      <TabList defaultActiveIndex={1}>
        <TabList.Item index={0}>Tab 1</TabList.Item>
        <TabList.Item index={1}>Tab 2</TabList.Item>
        <TabList.Item index={2}>Tab 3</TabList.Item>
      </TabList>
    );
    const activeTab = screen.getByRole("tab", { name: "Tab 2" });
    expect(activeTab).toHaveAttribute("aria-selected", "true");
  });

  it("activates tab on click", () => {
    render(
      <TabList defaultActiveIndex={0}>
        <TabList.Item index={0}>Tab 1</TabList.Item>
        <TabList.Item index={1}>Tab 2</TabList.Item>
        <TabList.Item index={2}>Tab 3</TabList.Item>
      </TabList>
    );
    const tab2 = screen.getByRole("tab", { name: "Tab 2" });
    fireEvent.click(tab2);
    expect(tab2).toHaveAttribute("aria-selected", "true");
  });
});
