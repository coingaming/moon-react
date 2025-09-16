import type { Meta, StoryObj } from "@storybook/react";
import { LinearProgress } from "@heathmont/moon-react";
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
      options: ["5xs", "4xs", "3xs", "2xs"],
      control: "select",
      table: {
        defaultValue: { summary: "2xs" },
      },
    },
  },
  render: ({ size, ...props }) => {
    const linearProgressProps = {
      ...props,
      ...(size !== "2xs" && { size }),
    };
    return <LinearProgress {...linearProgressProps} value={25} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const LinearProgressStory: Story = {
  args: {
    size: "2xs",
  },
};
