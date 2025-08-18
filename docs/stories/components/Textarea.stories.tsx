import type { Meta, StoryObj } from "@storybook/react";
import { Textarea, TextareaSizes } from "@heathmont/moon-react";
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
      options: Object.values(TextareaSizes),
      control: { type: "select" },
      table: {
        defaultValue: { summary: TextareaSizes.md },
      },
    },
  },
  render: ({ size, ...props }) => {
    const textareaProps = {
      ...props,
      ...(size !== TextareaSizes.md && { size }),
    };
    return <Textarea {...textareaProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const TextareaStory: Story = {
  args: {
    size: TextareaSizes.md,
  },
};
