import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Indicators & status/Tag",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="Tag"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const TagStory: Story = {};
