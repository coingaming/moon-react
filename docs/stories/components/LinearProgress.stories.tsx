import type { Meta, StoryObj } from "@storybook/react";
import { LinearProgress as LinearProgressComponent } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof LinearProgressComponent>;

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
    value: {
      description: "Current value of LinearProgress",
      control: "range",
      table: {
        defaultValue: { summary: "0" },
      },
    },
    label: {
      description: "Label for LinearProgress",
      control: "text",
      table: {
        defaultValue: { summary: "" },
      },
    },
  },
  render: ({ size, label, ...props }) => {
    const linearProgressProps = {
      ...props,
      ...(label && { label }),
      ...(size !== "2xs" && { size }),
    };
    return (
      <LinearProgressComponent {...linearProgressProps} value={props.value} />
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const LinearProgress: Story = {
  args: {
    size: "2xs",
    value: 25,
    label: "",
  },
};
