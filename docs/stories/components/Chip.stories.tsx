import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "@heathmont/moon-react";
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
      options: ["sm", "md"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      description: "Defines Chip variant",
      options: ["fill", "outline", "soft"],
      control: "select",
      table: {
        defaultValue: { summary: "fill" },
      },
    },
  },
  render: ({ variant, size, ...props }) => {
    const chipProps = {
      ...props,
      ...(variant !== "fill" && { variant }),
      ...(size !== "md" && { size }),
    };
    return <Chip {...chipProps}>Chip</Chip>;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const ChipStory: Story = {
  args: {
    size: "md",
    variant: "fill",
  },
};
