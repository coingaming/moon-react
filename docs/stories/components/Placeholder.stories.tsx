import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Indicators & status/Placeholder",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="Placeholder"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const PlaceholderStory: Story = {};
