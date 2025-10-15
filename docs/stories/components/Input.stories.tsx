import type { Meta, StoryObj } from "@storybook/react";
import { Input as InputComponent, FormGroup } from "@moondesignsystem/react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof InputComponent>;

const meta: Meta<Type> = {
  title: "Forms & selection controls/Input",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Input" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines Input size",
      options: ["sm", "md", "lg", "xl"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      description: "Defines Input variant",
      options: ["fill", "outline"],
      control: "select",
      table: {
        defaultValue: { summary: "fill" },
      },
    },
    error: {
      description: "Defines if Input is in error state",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      description: "Defines if Input is disabled",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  render: ({ size, variant, ...props }) => {
    const inputProps = {
      ...props,
      ...(size !== "md" && { size }),
      ...(variant !== "fill" && { variant }),
    };
    return <InputComponent {...inputProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Input: Story = {
  args: {
    size: "md",
    variant: "fill",
    error: false,
    disabled: false,
  },
};

export const InputWithLabelAndHint: Story = {
  args: { size: "md", variant: "fill", error: false, disabled: false },
  render: ({ size, variant, ...props }) => {
    const inputProps = {
      ...props,
      ...(size !== "md" && { size }),
      ...(variant !== "fill" && { variant }),
    };
    return (
      <FormGroup>
        <FormGroup.Label htmlFor="InputWithLabelAndHint">Label</FormGroup.Label>
        <InputComponent {...inputProps} id="InputWithLabelAndHint" />
        <FormGroup.Hint>Hint</FormGroup.Hint>
      </FormGroup>
    );
  },
};
