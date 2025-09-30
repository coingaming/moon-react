import type { Meta, StoryObj } from "@storybook/react";
import { List } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";
import StarIcon from "../shared/icons/StarIcon";

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
      options: ["sm", "md", "lg"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
  },
  render: ({ size, ...props }) => {
    const listProps = {
      ...props,
      ...(size !== "md" && { size }),
    };
    const items = new Array(3).fill("");
    return (
      <List {...listProps}>
        {items.map((_, index) => (
          <List.Item key={index}>Item {index + 1}</List.Item>
        ))}
      </List>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const ListStory: Story = {
  args: {
    size: "md",
  },
};

export const ListWithMetaStory: Story = {
  args: {
    size: "md",
  },
  render: ({ size, ...props }) => {
    const listProps = {
      ...props,
      ...(size !== "md" && { size }),
    };
    const items = new Array(3).fill("");
    return (
      <List {...listProps}>
        {items.map((_, index) => (
          <List.Item key={index}>
            Item {index + 1}
            <List.Meta>
              <StarIcon />
            </List.Meta>
          </List.Item>
        ))}
      </List>
    );
  },
};
