import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";
import { Avatar as AvatarComponent } from "@heathmont/moon-react";

type Type = React.ComponentProps<typeof AvatarComponent>;

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
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      description: "Defines Avatar variant",
      options: ["fill", "soft"],
      control: "select",
      table: {
        defaultValue: { summary: "fill" },
      },
    },
    children: {
      description: "Custom content of Avatar",
      control: { type: "text" },
    },
  },
  render: ({ size, variant, children, ...props }) => {
    const avatarProps = {
      ...props,
      ...(size !== "md" && { size }),
      ...(variant !== "fill" && { variant }),
    };
    return <AvatarComponent {...avatarProps}>{children}</AvatarComponent>;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Avatar: Story = {
  args: {
    size: "md",
    variant: "fill",
    children: undefined,
  },
};
