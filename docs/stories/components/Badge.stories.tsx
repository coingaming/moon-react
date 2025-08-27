import type { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeVariants, Contexts } from "@heathmont/moon-react";
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
      options: Object.values(BadgeVariants),
      control: "select",
      table: {
        defaultValue: { summary: BadgeVariants.fill },
      },
    },
    context: {
      description: "Defines Badge context",
      options: Object.values(Contexts),
      control: "select",
      table: {
        defaultValue: { summary: Contexts.brand },
      },
    },
  },
  render: ({ variant, context, ...props }) => {
    const badgeProps = {
      ...props,
      ...(variant !== BadgeVariants.fill && { variant }),
      ...(context !== Contexts.brand && { context }),
    };
    return <Badge {...badgeProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const BadgeStory: Story = {
  args: { variant: BadgeVariants.fill, context: Contexts.brand },
};
