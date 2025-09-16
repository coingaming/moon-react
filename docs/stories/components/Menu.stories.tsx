import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Menu>;

const meta: Meta<Type> = {
  title: "Navigation/Menu",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Menu" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines Menu size",
      options: ["sm", "md", "lg"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
  },
  render: ({ size, ...props }) => {
    const menuProps = {
      ...props,
      ...(size !== "md" && { size }),
    };
    const items = new Array(3).fill("");
    return (
      <Menu {...menuProps}>
        {items.map((_, index) => (
          <Menu.Item key={index}>Item {index + 1}</Menu.Item>
        ))}
      </Menu>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const MenuStory: Story = {
  args: {
    size: "md",
  },
};
