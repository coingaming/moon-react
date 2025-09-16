import type { Meta, StoryObj } from "@storybook/react";
import { Button, Dropdown } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Dropdown>;

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
      <Dropdown {...dropdownProps}>
        <Dropdown.Trigger>
          <Button>Open Dropdown</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <div className="w-full flex items-center justify-center h-space-80 bg-brand-subtle text-brand">
            Content
          </div>
        </Dropdown.Content>
      </Dropdown>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const DropdownStory: Story = {
  args: {},
  play: async ({ canvasElement, userEvent }) => {
    const button = canvasElement.querySelector("button");
    await userEvent.click(button);
  },
};
