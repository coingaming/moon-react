import type { Meta, StoryObj } from "@storybook/react";
import { List as ListComponent } from "@moondesignsystem/react";
import LinksBlock from "../shared/LinksBlock";
import StarIcon from "../shared/icons/StarIcon";

type Type = React.ComponentProps<typeof ListComponent>;

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
      <ListComponent {...listProps}>
        {items.map((_, index) => (
          <ListComponent.Item key={index}>Item {index + 1}</ListComponent.Item>
        ))}
      </ListComponent>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const List: Story = {
  args: {
    size: "md",
  },
};

export const ListWithMeta: Story = {
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
      <ListComponent {...listProps}>
        {items.map((_, index) => (
          <ListComponent.Item key={index}>
            Item {index + 1}
            <ListComponent.Meta>
              <StarIcon />
            </ListComponent.Meta>
          </ListComponent.Item>
        ))}
      </ListComponent>
    );
  },
};
