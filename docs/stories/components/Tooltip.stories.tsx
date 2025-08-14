import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Messaging & feedback/Tooltip",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="List"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const TooltipStory: Story = {};
