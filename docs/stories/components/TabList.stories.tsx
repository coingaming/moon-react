import type { Meta, StoryObj } from "@storybook/react";
import { Tab, TabList, TabListSizes } from "@heathmont/moon-react";
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
      options: Object.values(TabListSizes),
      control: { type: "select" },
      table: {
        defaultValue: { summary: TabListSizes.md },
      },
    },
  },
  render: ({ size, ...props }) => {
    const tabListProps = {
      ...props,
      ...(size !== TabListSizes.md && { size }),
    };
    const items = new Array(3).fill("");
    return (
      <TabList {...tabListProps}>
        {items.map((_, index) => (
          <Tab key={index} index={index}>
            Item {index + 1}
          </Tab>
        ))}
      </TabList>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const TabListStory: Story = { args: { size: TabListSizes.md } };
