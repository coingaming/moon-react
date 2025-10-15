import type { Meta, StoryObj } from "@storybook/react";
import {
  FormGroup,
  Textarea as TextareaComponent,
} from "@moondesignsystem/react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof TextareaComponent>;

const meta: Meta<Type> = {
  title: "Forms & selection controls/Textarea",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Textarea" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines Textarea size",
      options: ["sm", "md", "lg", "xl"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      description: "Defines Textarea variant",
      options: ["fill", "outline"],
      control: "select",
      table: {
        defaultValue: { summary: "fill" },
      },
    },
    error: {
      description: "Defines if Textarea is in error state",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      description: "Defines if Textarea is disabled",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  render: ({ size, variant, ...props }) => {
    const textareaProps = {
      ...props,
      ...(size !== "md" && { size }),
      ...(variant !== "fill" && { variant }),
    };
    return <TextareaComponent {...textareaProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Textarea: Story = {
  args: {
    size: "md",
    variant: "fill",
    error: false,
    disabled: false,
  },
};

export const TextareaWithLabelAndHint: Story = {
  args: { size: "md", variant: "fill", error: false, disabled: false },
  render: ({ size, variant, ...props }) => {
    const textareaProps = {
      ...props,
      ...(size !== "md" && { size }),
      ...(variant !== "fill" && { variant }),
    };
    return (
      <FormGroup>
        <FormGroup.Label htmlFor="TextareaWithLabelAndHint">
          Label
        </FormGroup.Label>
        <TextareaComponent {...textareaProps} id="TextareaWithLabelAndHint" />
        <FormGroup.Hint>Hint</FormGroup.Hint>
      </FormGroup>
    );
  },
};
