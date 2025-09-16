import type { Meta, StoryObj } from "@storybook/react";
import { TabList } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof TabList>;

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
      <TabList {...tabListProps}>
        {items.map((_, index) => (
          <TabList.Item key={index} index={index}>
            Item {index + 1}
          </TabList.Item>
        ))}
      </TabList>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const TabListStory: Story = { args: { size: "md" } };
