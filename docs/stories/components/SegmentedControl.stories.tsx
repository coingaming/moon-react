import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Forms & selection controls/Segmented Control",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="SegmentedControl"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const SegmentedControlStory: Story = {};
