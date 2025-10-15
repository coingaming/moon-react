import type { Meta, StoryObj } from "@storybook/react";
import { Badge as BadgeComponent } from "@moondesignsystem/react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof BadgeComponent>;

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
    children: {
      description: "Content of the Badge",
      control: "text",
      table: {
        defaultValue: { summary: "" },
      },
    },
  },
  render: ({ variant, context, ...props }) => {
    const badgeProps = {
      ...props,
      ...(variant !== "fill" && { variant }),
      ...(context !== "brand" && { context }),
    };
    return <BadgeComponent {...badgeProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Badge: Story = {
  args: { variant: "fill", context: "brand", children: "" },
};
