import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";
import UserIcon from "../shared/icons/UserIcon";

type Type = React.ComponentProps<typeof IconButton>;

const meta: Meta<Type> = {
  title: "Actions/Icon Button",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="IconButton" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines IconButton size",
      options: ["xs", "sm", "md", "lg", "xl"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    disabled: {
      description: "Disables IconButton when set to true",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    variant: {
      description: "Defines IconButton variant",
      options: ["fill", "outline", "soft", "ghost"],
      control: "select",
      table: {
        defaultValue: { summary: "fill" },
      },
    },
    context: {
      description: "Defines IconButton context",
      options: ["brand", "neutral", "positive", "negative", "caution", "info"],
      control: "select",
      table: {
        defaultValue: { summary: "brand" },
      },
    },
  },
  render: ({ variant, size, ...props }) => {
    const buttonProps = {
      ...props,
      ...(variant !== "fill" && { variant }),
      ...(size !== "md" && { size }),
    };
    return (
      <IconButton {...buttonProps}>
        <UserIcon />
      </IconButton>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const IconButtonStory: Story = {
  args: {
    size: "md",
    variant: "fill",
    context: "brand",
    disabled: false,
  },
};
