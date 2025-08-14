import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Containers & layout/Dropdown",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="Dropdown"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const DropdownStory: Story = {};
