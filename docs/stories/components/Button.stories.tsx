import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSizes, ButtonVariants } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Button>;

const meta: Meta<Type> = {
  title: "Actions/Button",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Button" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines Button size",
      options: Object.values(ButtonSizes),
      control: { type: "select" },
      table: {
        defaultValue: { summary: ButtonSizes.md },
      },
    },
    disabled: {
      description: "Disables Button when set to true",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    variant: {
      description: "Defines Button variant",
      options: Object.values(ButtonVariants),
      control: { type: "select" },
      table: {
        defaultValue: { summary: ButtonVariants.fill },
      },
    },
  },
  render: ({ variant, size, ...props }) => {
    const buttonProps = {
      ...props,
      ...(variant !== ButtonVariants.fill && { variant }),
      ...(size !== ButtonSizes.md && { size }),
    };
    return <Button {...buttonProps}>Button</Button>;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const ButtonStory: Story = {
  args: {
    variant: ButtonVariants.fill,
    size: ButtonSizes.md,
    disabled: false,
  },
};
