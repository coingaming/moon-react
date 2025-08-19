import type { Meta, StoryObj } from "@storybook/react";
import { Menu, MenuItem, MenuSizes } from "@heathmont/moon-react";
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
      options: Object.values(MenuSizes),
      control: { type: "select" },
      table: {
        defaultValue: { summary: MenuSizes.md },
      },
    },
  },
  render: ({ size, ...props }) => {
    const menuProps = {
      ...props,
      ...(size !== MenuSizes.md && { size }),
    };
    const items = new Array(3).fill("");
    return (
      <Menu {...menuProps}>
        {items.map((_, index) => (
          <MenuItem key={index}>Item {index + 1}</MenuItem>
        ))}
      </Menu>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const MenuStory: Story = {
  args: {
    size: MenuSizes.md,
  },
};
