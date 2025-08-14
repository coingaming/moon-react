import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";

const meta: Meta = {
  component: () => <div>Coming soon</div>,
  title: "Navigation/Breadcrumb",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="Breadcrumb"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const BreadcrumbStory: Story = {};
