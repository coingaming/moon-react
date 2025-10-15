import type { Meta, StoryObj } from "@storybook/react";
import { Tag as TagComponents } from "@moondesignsystem/react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof TagComponents>;

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
    return <TagComponents {...tagProps}>Tag</TagComponents>;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Tag: Story = {
  args: {
    size: "xs",
    variant: "fill",
    context: "brand",
  },
};
