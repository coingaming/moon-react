import type { Meta, StoryObj } from "@storybook/react";
import {
  SegmentedControl,
  Segment,
  SegmentedControlSizes,
} from "@heathmont/moon-react";
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
      options: Object.values(SegmentedControlSizes),
      control: "select",
      table: {
        defaultValue: { summary: SegmentedControlSizes.md },
      },
    },
  },
  render: ({ size, ...props }) => {
    const segmentedControlProps = {
      ...props,
      ...(size !== SegmentedControlSizes.md && { size }),
    };
    const items = new Array(3).fill("");
    return (
      <SegmentedControl {...segmentedControlProps} activeIndex={1}>
        {items.map((_, index) => (
          <Segment key={index} index={index}>
            Item {index + 1}
          </Segment>
        ))}
      </SegmentedControl>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const SegmentedControlStory: Story = {
  args: { size: SegmentedControlSizes.md },
};
