import type { Meta, StoryObj } from "@storybook/react";
import { FormGroup, Select as SelectComponent } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof SelectComponent>;

const meta: Meta<Type> = {
  title: "Forms & selection controls/Select",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Select" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines Select size",
      options: ["sm", "md", "lg", "xl"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      description: "Defines Select variant",
      options: ["fill", "outline"],
      control: "select",
      table: {
        defaultValue: { summary: "fill" },
      },
    },
    error: {
      description: "Defines if Select is in error state",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      description: "Defines if Select is disabled",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  render: ({ size, variant, ...props }) => {
    const selectProps = {
      ...props,
      ...(size !== "md" && { size }),
      ...(variant !== "fill" && { variant }),
    };
    const items = new Array(3).fill("");
    return (
      <SelectComponent {...selectProps}>
        {items.map((_, index) => (
          <SelectComponent.Option key={index} value={`item-${index}`}>
            Item {index}
          </SelectComponent.Option>
        ))}
      </SelectComponent>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Select: Story = {
  args: { size: "md", variant: "fill", error: false, disabled: false },
};

export const SelectWithLabelAndHint: Story = {
  args: { size: "md", variant: "fill", error: false, disabled: false },
  render: ({ size, variant, ...props }) => {
    const selectProps = {
      ...props,
      ...(size !== "md" && { size }),
      ...(variant !== "fill" && { variant }),
    };
    const items = new Array(3).fill("");
    return (
      <FormGroup>
        <FormGroup.Label htmlFor="SelectWithLabelAndHint">
          Label
        </FormGroup.Label>
        <SelectComponent {...selectProps} id="SelectWithLabelAndHint">
          {items.map((_, index) => (
            <SelectComponent.Option key={index} value={`item-${index}`}>
              Item {index}
            </SelectComponent.Option>
          ))}
        </SelectComponent>
        <FormGroup.Hint>Hint</FormGroup.Hint>
      </FormGroup>
    );
  },
};
