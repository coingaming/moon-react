import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Content display/Accordion",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="Accordion"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const AccordionStory: Story = {};
