import type { Meta, StoryObj } from "@storybook/react";
import { SegmentedControl } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof SegmentedControl>;

const meta: Meta<Type> = {
  title: "Forms & selection controls/Segmented Control",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="SegmentedControl" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines Segmented Control size",
      options: ["sm", "md"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
  },
  render: ({ size, ...props }) => {
    const segmentedControlProps = {
      ...props,
      ...(size !== "md" && { size }),
    };
    const items = new Array(3).fill("");
    return (
      <SegmentedControl {...segmentedControlProps} activeIndex={1}>
        {items.map((_, index) => (
          <SegmentedControl.Item key={index} index={index}>
            Item {index + 1}
          </SegmentedControl.Item>
        ))}
      </SegmentedControl>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const SegmentedControlStory: Story = {
  args: { size: "md" },
};
