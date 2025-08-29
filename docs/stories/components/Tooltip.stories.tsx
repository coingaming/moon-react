import type { Meta, StoryObj } from "@storybook/react";
import {
  Tooltip,
  TooltipPositions,
  TooltipContent,
  Button,
} from "@heathmont/moon-react";
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
      options: Object.values(TooltipPositions),
      control: "select",
      table: {
        defaultValue: { summary: TooltipPositions.top },
      },
    },
  },
  render: ({ position, ...props }) => {
    const tooltipProps = {
      ...props,
      ...(position !== TooltipPositions.top && { position }),
    };
    return (
      <Tooltip {...tooltipProps}>
        <Button>Hover me</Button>
        <TooltipContent>Tooltip</TooltipContent>
      </Tooltip>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const TooltipStory: Story = {
  args: {
    position: TooltipPositions.top,
  },
};
