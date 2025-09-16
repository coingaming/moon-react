import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Tag>;

const meta: Meta<Type> = {
  title: "Indicators & status/Tag",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Tag" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines Tag size",
      options: ["2xs", "xs"],
      control: "select",
      table: {
        defaultValue: { summary: "xs" },
      },
    },
    variant: {
      description: "Defines Tag variant",
      options: ["fill", "soft", "outline", "ghost"],
      control: "select",
      table: {
        defaultValue: { summary: "fill" },
      },
    },
    context: {
      description: "Defines Tag context",
      options: ["brand", "neutral", "positive", "negative", "caution", "info"],
      control: "select",
      table: {
        defaultValue: { summary: "brand" },
      },
    },
  },
  render: ({ size, context, variant, ...props }) => {
    const tagProps = {
      ...props,
      ...(size !== "xs" && { size }),
      ...(variant !== "fill" && { variant }),
      ...(context !== "brand" && { context }),
    };
    return <Tag {...tagProps}>Tag</Tag>;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const TagStory: Story = {
  args: {
    size: "xs",
    variant: "fill",
    context: "brand",
  },
};
