import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Select>;

const meta: Meta<Type> = {
  title: "Forms & selection controls/Select",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Select" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines Select size",
      options: ["sm", "md", "lg", "xl"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      description: "Defines Select variant",
      options: ["fill", "outline"],
      control: "select",
      table: {
        defaultValue: { summary: "fill" },
      },
    },
  },
  render: ({ size, variant, ...props }) => {
    const selectProps = {
      ...props,
      ...(size !== "md" && { size }),
      ...(variant !== "fill" && { variant }),
    };
    const items = new Array(3).fill("");
    return (
      <Select {...selectProps}>
        {items.map((_, index) => (
          <Select.Option key={index} value={`item-${index}`}>
            Item {index}
          </Select.Option>
        ))}
      </Select>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const SelectStory: Story = {
  args: { size: "md", variant: "fill" },
};
