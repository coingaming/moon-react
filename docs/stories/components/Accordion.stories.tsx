import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "@heathmont/moon-react";
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
  render: ({ size, ...props }) => {
    const accordionProps = {
      ...props,
      ...(size !== "md" && { size }),
    };
    const items = new Array(3).fill("");
    return (
      <Accordion {...accordionProps}>
        {items.map((_, index) => (
          <Accordion.Item key={index}>
            <Accordion.Header>
              {`Item ${index + 1}`}
              <Accordion.Meta>
                <Accordion.Toggle />
              </Accordion.Meta>
            </Accordion.Header>
            <Accordion.Content>Content</Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const AccordionStory: Story = {
  args: {
    size: "md",
    variant: "fill",
  },
};
