import type { Meta, StoryObj } from "@storybook/react";
import { Drawer as DrawerComponent, Button } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof DrawerComponent>;

const meta: Meta<Type> = {
  component: () => <div>Coming soon</div>,
  title: "Containers & layout/Drawer",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Drawer" />
      ),
    },
  },
  render: ({ ...props }) => {
    const drawerProps = {
      ...props,
    };
    return (
      <DrawerComponent {...drawerProps}>
        <DrawerComponent.Trigger>
          <Button>Open Drawer</Button>
        </DrawerComponent.Trigger>
        <DrawerComponent.Content>
          <div className="w-full flex items-center justify-center h-full bg-brand-subtle text-brand">
            Content
          </div>
        </DrawerComponent.Content>
      </DrawerComponent>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Drawer: Story = {
  args: {},
  play: async ({ canvasElement, userEvent }) => {
    const button = canvasElement.querySelector("button");
    await userEvent.click(button);
  },
};

export const DrawerWithHeaderAndClose: Story = {
  args: {},
  play: async ({ canvasElement, userEvent }) => {
    const button = canvasElement.querySelector("button");
    await userEvent.click(button);
  },
  render: ({ ...props }) => {
    const drawerProps = {
      ...props,
    };
    return (
      <DrawerComponent {...drawerProps}>
        <DrawerComponent.Trigger>
          <Button>Open Drawer</Button>
        </DrawerComponent.Trigger>
        <DrawerComponent.Content>
          <DrawerComponent.Header>
            Drawer Title
            <DrawerComponent.Close />
          </DrawerComponent.Header>
          <div className="w-full flex items-center justify-center h-full bg-brand-subtle text-brand">
            Content
          </div>
        </DrawerComponent.Content>
      </DrawerComponent>
    );
  },
};
