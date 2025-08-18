import type { Meta, StoryObj } from "@storybook/react";
import { LinearProgress, LinearProgressSizes } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof LinearProgress>;

const meta: Meta<Type> = {
  title: "Indicators & status/Linear Progress",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="LinearProgress" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines LinearProgress size",
      options: Object.values(LinearProgressSizes),
      control: { type: "select" },
      table: {
        defaultValue: { summary: LinearProgressSizes["2xs"] },
      },
    },
  },
  render: ({ size, ...props }) => {
    const linearProgressProps = {
      ...props,
      ...(size !== LinearProgressSizes["2xs"] && { size }),
    };
    return <LinearProgress {...linearProgressProps} value={25} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const LinearProgressStory: Story = {
  args: {
    size: LinearProgressSizes["2xs"],
  },
};
