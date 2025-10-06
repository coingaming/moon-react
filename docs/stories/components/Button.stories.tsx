import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@heathmont/moon-react";
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
      options: ["xs", "sm", "md", "lg", "xl"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    disabled: {
      description: "Disables Button when set to true",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    isFullWidth: {
      description: "Sets Button to full width",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    variant: {
      description: "Defines Button variant",
      options: ["fill", "outline", "soft", "ghost"],
      control: "select",
      table: {
        defaultValue: { summary: "fill" },
      },
    },
    context: {
      description: "Defines Button context",
      options: ["brand", "neutral", "positive", "negative", "caution", "info"],
      control: "select",
      table: {
        defaultValue: { summary: "brand" },
      },
    },
  },
  render: ({ variant, size, context, ...props }) => {
    const buttonProps = {
      ...props,
      ...(variant !== "fill" && { variant }),
      ...(size !== "md" && { size }),
      ...(context !== "brand" && { context }),
    };
    return <Button {...buttonProps}>Button</Button>;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const ButtonStory: Story = {
  args: {
    size: "md",
    variant: "fill",
    context: "brand",
    disabled: false,
    isFullWidth: false,
  },
};
