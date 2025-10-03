import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox as CheckboxComponent } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof CheckboxComponent>;

const meta: Meta<Type> = {
  title: "Forms & selection controls/Checkbox",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Checkbox" />
      ),
    },
  },
  argTypes: {
    label: {
      description: "Defines Checkbox label",
      control: { type: "text" },
    },
    disabled: {
      description: "Defines if Checkbox is disabled",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  render: ({ ...props }) => {
    return <CheckboxComponent {...props} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Checkbox: Story = {
  args: {
    disabled: false,
    label: "",
  },
};
