import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";
import { Radio } from "@heathmont/moon-react";

type Type = React.ComponentProps<typeof Radio>;

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
    label: {
      description: "Defines Radio label",
      control: { type: "text" },
    },
  },
  render: ({ ...props }) => {
    const radioProps = {
      ...props,
    };
    return <Radio id="radio" {...radioProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const RadioStory: Story = {
  args: {
    label: "",
  },
};
