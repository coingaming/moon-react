import type { Meta, StoryObj } from "@storybook/react";
import { Snackbar, SnackbarVariants } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Snackbar>;

const meta: Meta<Type> = {
  title: "Messaging & feedback/Snackbar",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Snackbar" />
      ),
    },
  },
  argTypes: {
    variant: {
      description: "Defines Snackbar variant",
      options: Object.values(SnackbarVariants),
      control: { type: "select" },
      table: {
        defaultValue: { summary: SnackbarVariants.neutral },
      },
    },
  },
  render: ({ variant, ...props }) => {
    const snackbarProps = {
      ...props,
      ...(variant !== SnackbarVariants.neutral && { variant }),
    };

    return <Snackbar {...snackbarProps}>Snackbar</Snackbar>;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const SnackbarStory: Story = {
  args: { variant: SnackbarVariants.neutral },
};
