import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "../components/Accordion";

const {
  Header: AccordionTitle,
  Content: AccordionContent,
  Item: AccordionItem,
} = Accordion as any;

describe("Accordion", () => {
  it("renders title and content", () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionTitle>My Title</AccordionTitle>
          <AccordionContent>My content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText("My Title")).toBeTruthy();
    expect(screen.getByText("My content")).toBeTruthy();
  });

  it("toggles open state when clicking the title", () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionTitle>Toggle</AccordionTitle>
          <AccordionContent>Hidden content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const summary = screen.getByText("Toggle");
    const details = summary.closest("details") as HTMLDetailsElement;
    expect(details.open).toBe(false);

    fireEvent.click(summary);
    expect(details.open).toBe(true);

    fireEvent.click(summary);
    expect(details.open).toBe(false);
  });

  it("respects initiallyOpen prop", () => {
    render(
      <Accordion>
        <AccordionItem initiallyOpen>
          <AccordionTitle>Open</AccordionTitle>
          <AccordionContent>Visible</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const summary = screen.getByText("Open");
    const details = summary.closest("details") as HTMLDetailsElement;
    expect(details.open).toBe(true);
  });

  it("accepts size prop and applies class", () => {
    const { container } = render(
      <Accordion size="lg">
        <AccordionItem>
          <AccordionTitle>Size</AccordionTitle>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(
      container.firstChild &&
        container.firstChild.classList.contains("moon-accordion-lg")
    ).toBe(true);
  });
});
