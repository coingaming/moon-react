import type { Meta, StoryObj } from "@storybook/react";
import { Menu as MenuComponent } from "@moondesignsystem/react";
import LinksBlock from "../shared/LinksBlock";
import StarIcon from "../shared/icons/StarIcon";

type Type = React.ComponentProps<typeof MenuComponent>;

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
      <MenuComponent {...menuProps}>
        {items.map((_, index) => (
          <MenuComponent.Item key={index}>Item {index + 1}</MenuComponent.Item>
        ))}
      </MenuComponent>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Menu: Story = {
  args: {
    size: "md",
  },
};

export const MenuWithMeta: Story = {
  args: {
    size: "md",
  },
  render: ({ size, ...props }) => {
    const menuProps = {
      ...props,
      ...(size !== "md" && { size }),
    };
    const items = new Array(3).fill("");
    return (
      <MenuComponent {...menuProps}>
        {items.map((_, index) => (
          <MenuComponent.Item key={index}>
            Item {index + 1}
            <MenuComponent.Meta>
              <StarIcon />
            </MenuComponent.Meta>
          </MenuComponent.Item>
        ))}
      </MenuComponent>
    );
  },
};
