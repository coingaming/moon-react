import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Navigation/Pagination",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="Pagination"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const PaginationStory: Story = {};
