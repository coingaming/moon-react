import type { Meta, StoryObj } from "@storybook/react";
import {
  Authenticator as AuthenticatorComponent,
  FormGroup,
} from "@moondesignsystem/react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof AuthenticatorComponent>;

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
    error: {
      description: "Defines if Authenticator is in error state",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      description: "Defines if Authenticator is disabled",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  render: ({ size, variant, ...props }) => {
    const authenticatorProps = {
      ...props,
      ...(size !== "md" && { size }),
      ...(variant !== "fill" && { variant }),
    };
    return <AuthenticatorComponent {...authenticatorProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Authenticator: Story = {
  args: { size: "md", variant: "fill", error: false, disabled: false },
};

export const AuthenticatorWithLabelAndHint: Story = {
  args: { size: "md", variant: "fill", error: false, disabled: false },
  render: ({ size, variant, ...props }) => {
    const authenticatorProps = {
      ...props,
      ...(size !== "md" && { size }),
      ...(variant !== "fill" && { variant }),
    };
    return (
      <FormGroup>
        <FormGroup.Label htmlFor="AuthenticatorWithLabelAndHint">
          Label
        </FormGroup.Label>
        <AuthenticatorComponent
          {...authenticatorProps}
          id="AuthenticatorWithLabelAndHint"
        />
        <FormGroup.Hint>Hint</FormGroup.Hint>
      </FormGroup>
    );
  },
};
