import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Indicators & status/Linear Progress",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="LinearProgress"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const LinearProgressStory: Story = {};
