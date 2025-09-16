import type { Meta, StoryObj } from "@storybook/react";
import { Snackbar, Button } from "@heathmont/moon-react";
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
      options: ["fill", "soft"],
      control: "select",
      table: {
        defaultValue: { summary: "fill" },
      },
    },
    context: {
      description: "Defines Snackbar context",
      options: ["brand", "neutral", "positive", "negative", "caution", "info"],
      control: "select",
      table: {
        defaultValue: { summary: "brand" },
      },
    },
  },
  render: ({ variant, context, ...props }) => {
    const snackbarProps = {
      ...props,
      ...(variant !== "fill" && { variant }),
      ...(context !== "brand" && { context }),
    };

    return (
      <Snackbar {...snackbarProps}>
        <Snackbar.Trigger>
          <Button>Open Snackbar</Button>
        </Snackbar.Trigger>
        <Snackbar.Content>Content</Snackbar.Content>
      </Snackbar>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const SnackbarStory: Story = {
  args: { variant: "fill", context: "brand" },
  play: async ({ canvasElement, userEvent }) => {
    const button = canvasElement.querySelector("button");
    await userEvent.click(button);
  },
};
