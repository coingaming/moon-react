import type { Meta, StoryObj } from "@storybook/react";
import { Tag, TagSizes, TagVariants } from "@heathmont/moon-react";
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
      options: Object.values(TagSizes),
      control: { type: "select" },
      table: {
        defaultValue: { summary: TagSizes.xs },
      },
    },
    variant: {
      description: "Defines Tag variant",
      options: Object.values(TagVariants),
      control: { type: "select" },
      table: {
        defaultValue: { summary: TagVariants.fill },
      },
    },
  },
  render: ({ size, variant, ...props }) => {
    const tagProps = {
      ...props,
      ...(size !== TagSizes.xs && { size }),
      ...(variant !== TagVariants.fill && { variant }),
    };
    return <Tag {...tagProps}>Tag</Tag>;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const TagStory: Story = {
  args: { size: TagSizes.xs, variant: TagVariants.fill },
};
