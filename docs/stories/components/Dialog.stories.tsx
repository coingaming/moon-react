import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Containers & layout/Dialog",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="Dialog"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const DialogStory: Story = {};
