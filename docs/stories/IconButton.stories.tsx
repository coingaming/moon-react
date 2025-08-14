import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconButton, IconButtonSizes, IconButtonVariants } from "@heathmont/moon-react";

type ButtonType = React.ComponentProps<typeof IconButton>;

const meta: Meta<ButtonType> = {
  component: IconButton,
  title: "Actions/Icon Button",
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Sets the content displayed inside the icon button.",
      control: "text",
      defaultValue: "Click me",
    },
    size: {
      description: "Defines the button size.",
      options: Object.values(IconButtonSizes),
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
      options: Object.values(IconButtonVariants),
      control: { type: "select" },
      defaultValue: "fill",
    },
  },
  render: ({ children, variant, size, ...props }) => {
    const buttonProps = {
      ...props,
      ...(variant !== IconButtonVariants.fill && { variant }),
      ...(size !== IconButtonSizes.md && { size }),
    };
    return <IconButton {...buttonProps}>{children}</IconButton>;
  },
};

export default meta;

type Story = StoryObj<ButtonType>;

export const ButtonStory: Story = {
  args: {
    children: "Click me",
    variant: IconButtonVariants.fill,
    size: IconButtonSizes.md,
    disabled: false,
  },
};
