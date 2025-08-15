import type { Meta, StoryObj } from "@storybook/react";
import { Input, InputSizes } from "@heathmont/moon-react";
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
      options: Object.values(InputSizes),
      control: { type: "select" },
      table: {
        defaultValue: { summary: InputSizes.md },
      },
    },
  },
  render: ({ size, ...props }) => {
    const inputProps = {
      ...props,
      ...(size !== InputSizes.md && { size }),
    };
    return <Input {...inputProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const InputStory: Story = {
  args: {
    size: InputSizes.md,
  },
};
