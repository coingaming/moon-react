import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Actions/Icon Button",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="IconButton"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const IconButtonStory: Story = {};
