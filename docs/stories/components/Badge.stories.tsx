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
  argTypes: {
    variant: {
      description: "Defines Badge variant",
      options: ["fill", "soft", "outline"],
      control: "select",
      table: {
        defaultValue: { summary: "fill" },
      },
    },
    context: {
      description: "Defines Badge context",
      options: ["brand", "neutral", "positive", "negative", "caution", "info"],
      control: "select",
      table: {
        defaultValue: { summary: "brand" },
      },
    },
  },
  render: ({ variant, context, ...props }) => {
    const badgeProps = {
      ...props,
      ...(variant !== "fill" && { variant }),
      ...(context !== "brand" && { context }),
    };
    return <Badge {...badgeProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const BadgeStory: Story = {
  args: { variant: "fill", context: "brand" },
};
