import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";
import { Radio as RadioComponent } from "@heathmont/moon-react";

type Type = React.ComponentProps<typeof RadioComponent>;

const meta: Meta<Type> = {
  title: "Forms & selection controls/Radio",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Radio" />
      ),
    },
  },
  argTypes: {
    disabled: {
      description: "Defines if Radio is disabled",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  render: ({ ...props }) => {
    const radioProps = {
      ...props,
    };
    return (
      <RadioComponent.Group name="demo">
        <RadioComponent {...radioProps} value="option 1" label="Option 1" />
        <RadioComponent {...radioProps} value="option 2" label="Option 2" />
      </RadioComponent.Group>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Radio: Story = {
  args: {
    disabled: false,
  },
};
