import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Forms & selection controls/Radio",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="Radio"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const RadioStory: Story = {};
