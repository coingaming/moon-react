import type { Meta, StoryObj } from "@storybook/react";
import {
  Snackbar,
  Button,
  SnackbarVariants,
  SnackbarTrigger,
  SnackbarContent,
} from "@heathmont/moon-react";
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

    return (
      <Snackbar {...snackbarProps}>
        <SnackbarTrigger>
          <Button>Open Snackbar</Button>
        </SnackbarTrigger>
        <SnackbarContent>Content</SnackbarContent>
      </Snackbar>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const SnackbarStory: Story = {
  args: { variant: SnackbarVariants.neutral },
};
