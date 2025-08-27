import type { Meta, StoryObj } from "@storybook/react";
import { Input, InputSizes, InputVariants } from "@heathmont/moon-react";
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
      control: "select",
      table: {
        defaultValue: { summary: InputSizes.md },
      },
    },
    variant: {
      description: "Defines Input variant",
      options: Object.values(InputVariants),
      control: "select",
      table: {
        defaultValue: { summary: InputVariants.fill },
      },
    },
  },
  render: ({ size, variant, ...props }) => {
    const inputProps = {
      ...props,
      ...(size !== InputSizes.md && { size }),
      ...(variant !== InputVariants.fill && { variant }),
    };
    return <Input {...inputProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const InputStory: Story = {
  args: {
    size: InputSizes.md,
    variant: InputVariants.fill,
  },
};
