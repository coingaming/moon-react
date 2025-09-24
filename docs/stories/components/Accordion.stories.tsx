import type { Meta, StoryObj } from "@storybook/react";
import { Accordion as AccordionComponent } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof AccordionComponent>;

const meta: Meta<Type> = {
  title: "Content display/Accordion",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Accordion" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines Accordion size",
      options: ["sm", "md", "lg", "xl"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      description: "Variant of Accordion",
      control: "select",
      options: ["fill", "ghost", "outline"],
      table: {
        defaultValue: { summary: "fill" },
      },
    },
  },
  render: ({ size, variant, ...props }) => {
    const accordionProps = {
      ...props,
      ...(size !== "md" && { size }),
      ...(variant !== "fill" && { variant }),
    };
    const items = new Array(3).fill("");
    return (
      <AccordionComponent {...accordionProps}>
        {items.map((_, index) => (
          <AccordionComponent.Item key={index}>
            <AccordionComponent.Header>{`Item ${
              index + 1
            }`}</AccordionComponent.Header>
            <AccordionComponent.Content>Content</AccordionComponent.Content>
          </AccordionComponent.Item>
        ))}
      </AccordionComponent>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Accordion: Story = {
  args: {
    size: "md",
    variant: "fill",
  },
};

export const AccordionWithMeta: Story = {
  args: {
    size: "md",
    variant: "fill",
  },
  render: ({ size, variant, ...props }) => {
    const accordionProps = {
      ...props,
      ...(size !== "md" && { size }),
      ...(variant !== "fill" && { variant }),
    };
    const items = new Array(3).fill("");
    return (
      <AccordionComponent {...accordionProps}>
        {items.map((_, index) => (
          <AccordionComponent.Item key={index}>
            <AccordionComponent.Header>
              {`Item ${index + 1}`}
              <AccordionComponent.Meta>
                <AccordionComponent.Toggle />
              </AccordionComponent.Meta>
            </AccordionComponent.Header>
            <AccordionComponent.Content>Content</AccordionComponent.Content>
          </AccordionComponent.Item>
        ))}
      </AccordionComponent>
    );
  },
};
