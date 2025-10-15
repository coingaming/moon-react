import type { Meta, StoryObj } from "@storybook/react";
import { TabList as TabListComponent } from "@moondesignsystem/react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof TabListComponent>;

const meta: Meta<Type> = {
  title: "Navigation/Tab List",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="TabList" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines TabList size",
      options: ["sm", "md"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
  },
  render: ({ size, ...props }) => {
    const tabListProps = {
      ...props,
      ...(size !== "md" && { size }),
    };
    const items = new Array(3).fill("");
    return (
      <TabListComponent {...tabListProps}>
        {items.map((_, index) => (
          <TabListComponent.Item key={index}>
            Item {index + 1}
          </TabListComponent.Item>
        ))}
      </TabListComponent>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const TabList: Story = { args: { size: "md" } };
