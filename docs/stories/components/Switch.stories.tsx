import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Forms & selection controls/Switch",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="Switch"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const SwitchStory: Story = {};
