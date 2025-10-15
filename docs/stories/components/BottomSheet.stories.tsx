import type { Meta, StoryObj } from "@storybook/react";
import {
  BottomSheet as BottomSheetComponent,
  Button,
} from "@moondesignsystem/react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof BottomSheetComponent>;

const meta: Meta<Type> = {
  title: "Containers & layout/Bottom Sheet",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="BottomSheet" />
      ),
    },
  },
  argTypes: {
    hasHandle: {
      description: "Shows a handle at the top of the bottom sheet",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  render: ({ hasHandle, ...props }) => {
    const bottomSheetProps = {
      ...props,
      hasHandle,
    };
    return (
      <BottomSheetComponent {...bottomSheetProps}>
        <BottomSheetComponent.Trigger>
          <Button>Open BottomSheet</Button>
        </BottomSheetComponent.Trigger>
        <BottomSheetComponent.Content>
          <div className="w-full flex items-center justify-center h-full bg-brand-subtle text-brand overflow-y-auto">
            Content
          </div>
        </BottomSheetComponent.Content>
      </BottomSheetComponent>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const BottomSheet: Story = {
  args: { hasHandle: false },
  play: async ({ canvasElement, userEvent }) => {
    const button = canvasElement.querySelector("button");
    await userEvent.click(button);
  },
};

export const BottomSheetWithHeaderAndClose: Story = {
  args: { hasHandle: false },
  play: async ({ canvasElement, userEvent }) => {
    const button = canvasElement.querySelector("button");
    await userEvent.click(button);
  },
  render: ({ hasHandle, ...props }) => {
    const bottomSheetProps = {
      ...props,
      hasHandle,
    };
    return (
      <BottomSheetComponent {...bottomSheetProps}>
        <BottomSheetComponent.Trigger>
          <Button>Open BottomSheet</Button>
        </BottomSheetComponent.Trigger>
        <BottomSheetComponent.Content>
          <BottomSheetComponent.Header>
            Bottom Sheet
            <BottomSheetComponent.Close />
          </BottomSheetComponent.Header>
          <div className="w-full flex items-center justify-center h-full bg-brand-subtle text-brand overflow-y-auto">
            Content
          </div>
        </BottomSheetComponent.Content>
      </BottomSheetComponent>
    );
  },
};
