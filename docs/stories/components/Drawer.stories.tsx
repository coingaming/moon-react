import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Containers & layout/Drawer",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="Drawer"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const DrawerStory: Story = {};
