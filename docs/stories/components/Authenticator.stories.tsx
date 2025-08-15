import type { Meta, StoryObj } from "@storybook/react";
import {
  Authenticator,
  AuthenticatorItem,
  AuthenticatorSizes,
} from "@heathmont/moon-react";
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
      options: Object.values(AuthenticatorSizes),
      control: { type: "select" },
      table: {
        defaultValue: { summary: AuthenticatorSizes.md },
      },
    },
  },
  render: ({ size, ...props }) => {
    const authenticatorProps = {
      ...props,
      ...(size !== AuthenticatorSizes.md && { size }),
    };
    const items = new Array(6).fill("");
    return (
      <Authenticator {...authenticatorProps}>
        {items.map((_, index) => (
          <AuthenticatorItem key={index} index={index} />
        ))}
      </Authenticator>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const AuthenticatorStory: Story = {
  args: { size: AuthenticatorSizes.md },
};
