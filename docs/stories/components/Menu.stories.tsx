import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Navigation/Menu",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="Menu"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const MenuStory: Story = {};
