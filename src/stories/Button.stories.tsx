import Button from "@/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

type ButtonProps = React.ComponentProps<typeof Button>;

const meta: Meta<ButtonProps> = {
  component: Button,
  title: "actions/Button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      type: "string",
      control: "text",
    },
    size: {
      type: "string",
      control: "text",
    },
  },
  render: () => (
    <Button variant="default" size="sm">
      Click here
    </Button>
  ),
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const ButtonStory: Story = {};
