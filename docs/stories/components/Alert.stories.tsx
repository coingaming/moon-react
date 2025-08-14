import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Messaging & feedback/Alert",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="Alert"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const AlertStory: Story = {};
