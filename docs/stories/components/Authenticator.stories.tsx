import type { Meta, StoryObj } from "@storybook/react";
import {
  Authenticator,
  AuthenticatorSizes,
  AuthenticatorVariants,
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
      control: "select",
      table: {
        defaultValue: { summary: AuthenticatorSizes.md },
      },
    },
    variant: {
      description: "Defines Authenticator variant",
      options: Object.values(AuthenticatorVariants),
      control: "select",
      table: {
        defaultValue: { summary: AuthenticatorVariants.fill },
      },
    },
  },
  render: ({ size, variant, ...props }) => {
    const authenticatorProps = {
      ...props,
      ...(size !== AuthenticatorSizes.md && { size }),
      ...(variant !== AuthenticatorVariants.fill && { variant }),
    };
    return <Authenticator {...authenticatorProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const AuthenticatorStory: Story = {
  args: { size: AuthenticatorSizes.md, variant: AuthenticatorVariants.fill },
};
