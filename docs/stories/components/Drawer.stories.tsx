import type { Meta, StoryObj } from "@storybook/react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  Button,
} from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Drawer>;

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
      <Drawer {...drawerProps}>
        <DrawerTrigger>
          <Button>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>Drawer content</DrawerContent>
      </Drawer>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const DrawerStory: Story = { args: {} };
