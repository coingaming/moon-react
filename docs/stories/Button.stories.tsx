import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSizes, ButtonVariants } from "@heathmont/moon-react";

type ButtonType = React.ComponentProps<typeof Button>;

const meta: Meta<ButtonType> = {
  component: Button,
  title: "Actions/Button",
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Sets the content displayed inside the button.",
      control: "text",
      defaultValue: "Click me",
    },
    size: {
      description: "Defines the button size.",
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
      defaultValue: "md",
    },
    disabled: {
      description: "Disables the button when set to true.",
      options: [true, false],
      control: { type: "boolean" },
      defaultValue: false,
    },
    variant: {
      description: "Sets the button style variant.",
      options: ["fill", "outline", "soft", "ghost"],
      control: { type: "select" },
      defaultValue: "fill",
    },
  },
  render: ({ children, ...props }) => <Button {...props}>{children}</Button>,
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
