import type { Meta, StoryObj } from "@storybook/react";
import { Dialog as DialogComponent, Button } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof DialogComponent>;

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
      <DialogComponent {...dialogProps}>
        <DialogComponent.Trigger>
          <Button>Open Dialog</Button>
        </DialogComponent.Trigger>
        <DialogComponent.Content>
          <div className="w-full flex items-center justify-center h-40 bg-brand-subtle text-brand">
            Content
          </div>
        </DialogComponent.Content>
      </DialogComponent>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Dialog: Story = {
  args: {},
  play: async ({ canvasElement, userEvent }) => {
    const button = canvasElement.querySelector("button");
    await userEvent.click(button);
  },
};

export const DialogWithHeaderAndClose: Story = {
  args: {},
  play: async ({ canvasElement, userEvent }) => {
    const button = canvasElement.querySelector("button");
    await userEvent.click(button);
  },
  render: ({ ...props }) => {
    const dialogProps = {
      ...props,
    };
    return (
      <DialogComponent {...dialogProps}>
        <DialogComponent.Trigger>
          <Button>Open Dialog</Button>
        </DialogComponent.Trigger>
        <DialogComponent.Content>
          <DialogComponent.Header>
            Dialog Title
            <DialogComponent.Close />
          </DialogComponent.Header>
          <div className="w-full flex items-center justify-center h-40 bg-brand-subtle text-brand">
            Content
          </div>
        </DialogComponent.Content>
      </DialogComponent>
    );
  },
};
