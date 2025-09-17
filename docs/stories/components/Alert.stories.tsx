import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";
import { Alert } from "@heathmont/moon-react";

type Type = React.ComponentProps<typeof Alert>;

const meta: Meta<Type> = {
  title: "Messaging & feedback/Alert",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Alert" />
      ),
    },
  },
  argTypes: {
    variant: {
      description: "Defines Alert variant",
      options: ["fill", "soft", "outline"],
      control: "select",
      table: {
        defaultValue: { summary: "fill" },
      },
    },
    context: {
      description: "Defines Alert context",
      options: ["brand", "neutral", "positive", "negative", "caution", "info"],
      control: "select",
      table: {
        defaultValue: { summary: "brand" },
      },
    },
  },
  render: ({ variant, context, ...props }) => {
    const alertProps = {
      ...props,
      ...(variant !== "fill" && { variant }),
      ...(context !== "brand" && { context }),
    };
    return <Alert {...alertProps}>Alert</Alert>;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const AlertStory: Story = {
  args: { variant: "fill", context: "brand" },
};
