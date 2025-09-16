import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet, Button } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof BottomSheet>;

const meta: Meta<Type> = {
  title: "Containers & layout/Bottom Sheet",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="BottomSheet" />
      ),
    },
  },
  render: ({ ...props }) => {
    const bottomSheetProps = {
      ...props,
    };
    return (
      <BottomSheet {...bottomSheetProps}>
        <BottomSheet.Trigger>
          <Button>Open BottomSheet</Button>
        </BottomSheet.Trigger>
        <BottomSheet.Content>
          <div className="w-full flex items-center justify-center h-full bg-brand-subtle text-brand overflow-y-auto">
            Content
          </div>
        </BottomSheet.Content>
      </BottomSheet>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const BottomSheetStory: Story = {
  args: {},
  play: async ({ canvasElement, userEvent }) => {
    const button = canvasElement.querySelector("button");
    await userEvent.click(button);
  },
};
