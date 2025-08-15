import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem, ListSizes } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof List>;

const meta: Meta<Type> = {
  title: "Content display/List",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="List" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines List item size",
      options: Object.values(ListSizes),
      control: { type: "select" },
      table: {
        defaultValue: { summary: ListSizes.md },
      },
    },
  },
  render: ({ size, ...props }) => {
    const listProps = {
      ...props,
      ...(size !== ListSizes.md && { size }),
    };
    const items = new Array(3).fill("");
    return (
      <List {...listProps}>
        {items.map((_, index) => (
          <ListItem key={index}>Item {index + 1}</ListItem>
        ))}
      </List>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const ListStory: Story = {
  args: {
    size: ListSizes.md,
  },
};
