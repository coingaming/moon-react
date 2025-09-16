import type { Meta, StoryObj } from "@storybook/react";
import { Authenticator } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Authenticator>;

const meta: Meta<Type> = {
  title: "Forms & selection controls/Authenticator",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Authenticator" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines Authenticator size",
      options: ["sm", "md", "lg", "xl"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      description: "Defines Authenticator variant",
      options: ["fill", "outline"],
      control: "select",
      table: {
        defaultValue: { summary: "fill" },
      },
    },
  },
  render: ({ size, variant, ...props }) => {
    const authenticatorProps = {
      ...props,
      ...(size !== "md" && { size }),
      ...(variant !== "fill" && { variant }),
    };
    return <Authenticator {...authenticatorProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const AuthenticatorStory: Story = {
  args: { size: "md", variant: "fill" },
};
