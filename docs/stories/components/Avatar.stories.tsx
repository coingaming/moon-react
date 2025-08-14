import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Content display/Avatar",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="Avatar"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const AvatarStory: Story = {};
