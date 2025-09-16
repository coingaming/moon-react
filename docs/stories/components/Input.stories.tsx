import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Input>;

const meta: Meta<Type> = {
  title: "Forms & selection controls/Input",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Input" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines Input size",
      options: ["sm", "md", "lg", "xl"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      description: "Defines Input variant",
      options: ["fill", "outline"],
      control: "select",
      table: {
        defaultValue: { summary: "fill" },
      },
    },
  },
  render: ({ size, variant, ...props }) => {
    const inputProps = {
      ...props,
      ...(size !== "md" && { size }),
      ...(variant !== "fill" && { variant }),
    };
    return <Input {...inputProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const InputStory: Story = {
  args: {
    size: "md",
    variant: "fill",
  },
};
