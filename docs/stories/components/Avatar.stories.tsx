import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";
import { Avatar, AvatarSizes, AvatarVariants } from "@heathmont/moon-react";

type Type = React.ComponentProps<typeof Avatar>;

const meta: Meta<Type> = {
  title: "Content display/Avatar",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Avatar" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines Avatar size",
      options: Object.values(AvatarSizes),
      control: "select",
      table: {
        defaultValue: { summary: AvatarSizes.md },
      },
    },
    variant: {
      description: "Defines Avatar variant",
      options: Object.values(AvatarVariants),
      control: "select",
      table: {
        defaultValue: { summary: AvatarVariants.fill },
      },
    },
  },
  render: ({ size, variant, ...props }) => {
    const avatarProps = {
      ...props,
      ...(size !== AvatarSizes.md && { size }),
      ...(variant !== AvatarVariants.fill && { variant }),
    };
    return <Avatar {...avatarProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const AvatarStory: Story = {
  args: {
    size: AvatarSizes.md,
    variant: AvatarVariants.fill,
  },
};
