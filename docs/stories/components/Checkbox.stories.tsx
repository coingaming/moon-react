import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Forms & selection controls/Checkbox",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="Checkbox"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const CheckboxStory: Story = {};
