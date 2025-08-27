import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";
import {
  Alert,
  AlertTitle,
  AlertVariants,
  Contexts,
} from "@heathmont/moon-react";

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
      options: Object.values(AlertVariants),
      control: "select",
      table: {
        defaultValue: { summary: AlertVariants.fill },
      },
    },
    context: {
      description: "Defines Alert context",
      options: Object.values(Contexts),
      control: "select",
      table: {
        defaultValue: { summary: Contexts.brand },
      },
    },
  },
  render: ({ variant, context, ...props }) => {
    const alertProps = {
      ...props,
      ...(variant !== AlertVariants.fill && { variant }),
      ...(context !== Contexts.brand && { context }),
    };
    return (
      <Alert {...alertProps}>
        <AlertTitle>Alert</AlertTitle>
      </Alert>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const AlertStory: Story = {
  args: { variant: AlertVariants.fill, context: Contexts.brand },
};
