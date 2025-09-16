import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, Button } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Dialog>;

const meta: Meta<Type> = {
  component: () => <div>Coming soon</div>,
  title: "Containers & layout/Dialog",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Dialog" />
      ),
    },
  },
  render: ({ ...props }) => {
    const dialogProps = {
      ...props,
    };
    return (
      <Dialog {...dialogProps}>
        <Dialog.Trigger>
          <Button>Open Dialog</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <div className="w-full flex items-center justify-center h-space-160 bg-brand-subtle text-brand">
            Content
          </div>
        </Dialog.Content>
      </Dialog>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const DialogStory: Story = {
  args: {},
  play: async ({ canvasElement, userEvent }) => {
    const button = canvasElement.querySelector("button");
    await userEvent.click(button);
  },
};
