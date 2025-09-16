import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgress } from "@heathmont/moon-react";
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
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
  },
  render: ({ size, ...props }) => {
    const circularProgressProps = {
      ...props,
      ...(size !== "md" && { size }),
    };
    return <CircularProgress {...circularProgressProps} value={25} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const CircularProgressStory: Story = {
  args: { size: "md" },
};
