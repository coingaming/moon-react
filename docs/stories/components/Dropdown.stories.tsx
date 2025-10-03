import type { Meta, StoryObj } from "@storybook/react";
import { Button, Dropdown as DropdownComponent } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof DropdownComponent>;

const meta: Meta<Type> = {
  title: "Containers & layout/Dropdown",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Dropdown" />
      ),
    },
  },
  render: ({ ...props }) => {
    const dropdownProps = {
      ...props,
    };
    return (
      <DropdownComponent {...dropdownProps}>
        <DropdownComponent.Trigger>
          <Button>Open Dropdown</Button>
        </DropdownComponent.Trigger>
        <DropdownComponent.Content>
          <div className="w-full flex items-center justify-center h-20 bg-brand-subtle text-brand">
            Content
          </div>
        </DropdownComponent.Content>
      </DropdownComponent>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Dropdown: Story = {
  args: {},
  play: async ({ canvasElement, userEvent }) => {
    const button = canvasElement.querySelector("button");
    await userEvent.click(button);
  },
};
