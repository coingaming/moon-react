import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  ButtonSizes,
  ButtonVariants,
  Contexts,
} from "@heathmont/moon-react";
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
      control: "select",
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
      control: "select",
      table: {
        defaultValue: { summary: ButtonVariants.fill },
      },
    },
    context: {
      description: "Defines Button context",
      options: Object.values(Contexts),
      control: "select",
      table: {
        defaultValue: { summary: Contexts.brand },
      },
    },
  },
  render: ({ variant, size, context, ...props }) => {
    const buttonProps = {
      ...props,
      ...(variant !== ButtonVariants.fill && { variant }),
      ...(size !== ButtonSizes.md && { size }),
      ...(context !== Contexts.brand && { context }),
    };
    return <Button {...buttonProps}>Button</Button>;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const ButtonStory: Story = {
  args: {
    size: ButtonSizes.md,
    variant: ButtonVariants.fill,
    context: Contexts.brand,
    disabled: false,
  },
};
