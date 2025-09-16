import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, Button } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Tooltip>;

const meta: Meta<Type> = {
  title: "Messaging & feedback/Tooltip",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Tooltip" />
      ),
    },
  },
  argTypes: {
    position: {
      description: "Defines Tooltip position",
      options: ["end", "start", "top", "bottom"],
      control: "select",
      table: {
        defaultValue: { summary: "top" },
      },
    },
  },
  render: ({ position, ...props }) => {
    const tooltipProps = {
      ...props,
      ...(position !== "top" && { position }),
    };
    return (
      <Tooltip {...tooltipProps}>
        <Button>Hover me</Button>
        <Tooltip.Content>Tooltip</Tooltip.Content>
      </Tooltip>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const TooltipStory: Story = {
  args: {
    position: "top",
  },
};
