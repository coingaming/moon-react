import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Indicators & status/Circular Progress",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="CircularProgress"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const CircularProgressStory: Story = {};
