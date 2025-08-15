import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Checkbox>;

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
  },
  render: ({ ...props }) => {
    const checkboxProps = {
      ...props,
    };
    return <Checkbox id="checkbox" {...checkboxProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const CheckboxStory: Story = {
  args: {
    label: "",
  },
};
