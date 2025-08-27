import type { Meta, StoryObj } from "@storybook/react";
import { Chip, ChipSizes, ChipVariants } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Chip>;

const meta: Meta<Type> = {
  title: "Forms & selection controls/Chip",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Chip" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines Chip size",
      options: Object.values(ChipSizes),
      control: "select",
      table: {
        defaultValue: { summary: ChipSizes.md },
      },
    },
    variant: {
      description: "Defines Chip variant",
      options: Object.values(ChipVariants),
      control: "select",
      table: {
        defaultValue: { summary: ChipVariants.fill },
      },
    },
  },
  render: ({ variant, size, ...props }) => {
    const chipProps = {
      ...props,
      ...(variant !== ChipVariants.fill && { variant }),
      ...(size !== ChipSizes.md && { size }),
    };
    return <Chip {...chipProps}>Chip</Chip>;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const ChipStory: Story = {
  args: {
    size: ChipSizes.md,
    variant: ChipVariants.fill,
  },
};
