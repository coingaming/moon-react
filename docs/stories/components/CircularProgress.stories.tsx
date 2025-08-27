import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgress, CircularProgressSizes } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof CircularProgress>;

const meta: Meta<Type> = {
  title: "Indicators & status/Circular Progress",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="CircularProgress" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines CircularProgress size",
      options: Object.values(CircularProgressSizes),
      control: "select",
      table: {
        defaultValue: { summary: CircularProgressSizes.md },
      },
    },
  },
  render: ({ size, ...props }) => {
    const circularProgressProps = {
      ...props,
      ...(size !== CircularProgressSizes.md && { size }),
    };
    return <CircularProgress {...circularProgressProps} value={25} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const CircularProgressStory: Story = {
  args: { size: CircularProgressSizes.md },
};
