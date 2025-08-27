import type { Meta, StoryObj } from "@storybook/react";
import {
  IconButton,
  IconButtonSizes,
  IconButtonVariants,
} from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";
import UserIcon from "../shared/icons/UserIcon";

type Type = React.ComponentProps<typeof IconButton>;

const meta: Meta<Type> = {
  title: "Actions/Icon Button",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Button" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines IconButton size",
      options: Object.values(IconButtonSizes),
      control: "select",
      table: {
        defaultValue: { summary: IconButtonSizes.md },
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
      options: Object.values(IconButtonVariants),
      control: "select",
      table: {
        defaultValue: { summary: IconButtonVariants.fill },
      },
    },
  },
  render: ({ variant, size, ...props }) => {
    const buttonProps = {
      ...props,
      ...(variant !== IconButtonVariants.fill && { variant }),
      ...(size !== IconButtonSizes.md && { size }),
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
    variant: IconButtonVariants.fill,
    size: IconButtonSizes.md,
    disabled: false,
  },
};
