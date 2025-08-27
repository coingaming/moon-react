import type { Meta, StoryObj } from "@storybook/react";
import {
  Snackbar,
  Button,
  SnackbarVariants,
  SnackbarTrigger,
  SnackbarContent,
  Contexts,
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
      control: "select",
      table: {
        defaultValue: { summary: SnackbarVariants.fill },
      },
    },
    context: {
      description: "Defines Snackbar context",
      options: Object.values(Contexts),
      control: "select",
      table: {
        defaultValue: { summary: Contexts.brand },
      },
    },
  },
  render: ({ variant, context, ...props }) => {
    const snackbarProps = {
      ...props,
      ...(variant !== SnackbarVariants.fill && { variant }),
      ...(context !== Contexts.brand && { context }),
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
  args: { variant: SnackbarVariants.fill, context: Contexts.brand },
  play: async ({ canvasElement, userEvent }) => {
    const button = canvasElement.querySelector("button");
    await userEvent.click(button);
  },
};
