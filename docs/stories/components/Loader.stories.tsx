import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Indicators & status/Loader",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="Loader"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const LoaderStory: Story = {};
