import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Indicators & status/Badge",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="Badge"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const BadgeStory: Story = {};
