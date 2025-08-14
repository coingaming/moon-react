import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Containers & layout/Bottom Sheet",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="BottomSheet"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const BottomSheetStory: Story = {};
