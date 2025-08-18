import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from "@heathmont/moon-react";
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
        <DropdownTrigger>
          <Button>Open Dropdown</Button>
        </DropdownTrigger>
        <DropdownContent>Dropdown content</DropdownContent>
      </Dropdown>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const DropdownStory: Story = {};
