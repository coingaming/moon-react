import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgress as CircularProgressComponent } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof CircularProgressComponent>;

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
    value: {
      description: "Current value of CircularProgress",
      control: "range",
      table: {
        defaultValue: { summary: "0" },
      },
    },
  },
  render: ({ size, ...props }) => {
    const circularProgressProps = {
      ...props,
      ...(size !== "md" && { size }),
    };
    return (
      <CircularProgressComponent
        {...circularProgressProps}
        value={props.value}
      />
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const CircularProgress: Story = {
  args: { size: "md", value: 25 },
};
