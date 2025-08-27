import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionSizes,
  AccordionVariants,
  AccordionTitle,
} from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Accordion>;

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
      options: Object.values(AccordionSizes),
      control: "select",
      table: {
        defaultValue: { summary: AccordionSizes.md },
      },
    },
    variant: {
      description: "Variant of Accordion",
      control: "select",
      options: Object.values(AccordionVariants),
      table: {
        defaultValue: { summary: AccordionVariants.fill },
      },
    },
  },
  render: ({ size, ...props }) => {
    const accordionProps = {
      ...props,
      ...(size !== AccordionSizes.md && { size }),
    };
    const items = new Array(3).fill("");
    return (
      <Accordion {...accordionProps}>
        {items.map((_, index) => (
          <AccordionItem key={index}>
            <AccordionTitle>{`Item ${index + 1}`}</AccordionTitle>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const AccordionStory: Story = {
  args: {
    size: AccordionSizes.md,
    variant: AccordionVariants.fill,
  },
};
