import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Badge>;

const meta: Meta<Type> = {
  title: "Indicators & status/Badge",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Badge" />
      ),
    },
  },
  render: ({ ...props }) => {
    const badgeProps = {
      ...props,
    };
    return <Badge {...badgeProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const BadgeStory: Story = { args: {} };
