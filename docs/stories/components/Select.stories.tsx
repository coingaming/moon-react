import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectItem,
  SelectSizes,
  SelectVariants,
} from "@heathmont/moon-react";
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
      options: Object.values(SelectSizes),
      control: "select",
      table: {
        defaultValue: { summary: SelectSizes.md },
      },
    },
    variant: {
      description: "Defines Select variant",
      options: Object.values(SelectVariants),
      control: "select",
      table: {
        defaultValue: { summary: SelectVariants.fill },
      },
    },
  },
  render: ({ size, variant, ...props }) => {
    const selectProps = {
      ...props,
      ...(size !== SelectSizes.md && { size }),
      ...(variant !== SelectVariants.fill && { variant }),
    };
    const items = new Array(3).fill("");
    return (
      <Select {...selectProps}>
        {items.map((_, index) => (
          <SelectItem key={index} value={`item-${index}`}>
            Item {index}
          </SelectItem>
        ))}
      </Select>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const SelectStory: Story = {
  args: { size: SelectSizes.md, variant: SelectVariants.fill },
};
