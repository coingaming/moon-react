import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SegmentedControl as SegmentedControlComponent } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof SegmentedControlComponent>;

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
  render: ({ size, activeIndex: controlledActiveIndex, ...props }) => {
    const [localActiveIndex, setLocalActiveIndex] = useState(0);
    const segmentedControlProps = {
      ...props,
      ...(size !== "md" && { size }),
      ...(controlledActiveIndex !== undefined && {
        activeIndex: controlledActiveIndex,
        setActiveIndex: setLocalActiveIndex,
      }),
    };
    const items = new Array(3).fill("");
    return (
      <SegmentedControlComponent {...segmentedControlProps}>
        {items.map((_, index) => (
          <SegmentedControlComponent.Item key={index}>
            Item {index + 1}
          </SegmentedControlComponent.Item>
        ))}
      </SegmentedControlComponent>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const SegmentedControl: Story = {
  args: { size: "md" },
};
