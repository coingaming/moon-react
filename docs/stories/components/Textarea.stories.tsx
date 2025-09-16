import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Textarea>;

const meta: Meta<Type> = {
  title: "Forms & selection controls/Textarea",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Textarea" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines Textarea size",
      options: ["sm", "md", "lg", "xl"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      description: "Defines Textarea variant",
      options: ["fill", "outline"],
      control: "select",
      table: {
        defaultValue: { summary: "fill" },
      },
    },
  },
  render: ({ size, variant, ...props }) => {
    const textareaProps = {
      ...props,
      ...(size !== "md" && { size }),
      ...(variant !== "fill" && { variant }),
    };
    return <Textarea {...textareaProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const TextareaStory: Story = {
  args: {
    size: "md",
    variant: "fill",
  },
};
