import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSizes, ButtonVariants } from "@heathmont/moon-react";
import { getMoonLink, getGithubLink } from "../utils/component-links";
import LinksBlock from "../shared/LinksBlock";

type ButtonType = React.ComponentProps<typeof Button>;

const meta: Meta<ButtonType> = {
  component: Button,
  title: "Actions/Button",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock
          context={context}
          component="Button"
        />
      ),
    },
  },
  argTypes: {
    children: {
      description: "Sets the content displayed inside the button.",
      control: "text",
      defaultValue: "Click me",
    },
    size: {
      description: "Defines the button size.",
      options: Object.values(ButtonSizes),
      control: { type: "select" },
      defaultValue: "md",
    },
    disabled: {
      description: "Disables the button when set to true.",
      control: { type: "boolean" },
      defaultValue: false,
    },
    variant: {
      description: "Sets the button style variant.",
      options: Object.values(ButtonVariants),
      control: { type: "select" },
      defaultValue: "fill",
    },
  },
  render: ({ children, variant, size, ...props }) => {
    const buttonProps = {
      ...props,
      ...(variant !== ButtonVariants.fill && { variant }),
      ...(size !== ButtonSizes.md && { size }),
    };
    return <Button {...buttonProps}>{children}</Button>;
  },
};

export default meta;

type Story = StoryObj<ButtonType>;

export const ButtonStory: Story = {
  args: {
    children: "Click me",
    variant: ButtonVariants.fill,
    size: ButtonSizes.md,
    disabled: false,
  },
};
