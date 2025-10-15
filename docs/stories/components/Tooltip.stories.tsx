import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip as TooltipComponent, Button } from "@moondesignsystem/react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof TooltipComponent>;

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
    hasPointer: {
      description: "Defines if Tooltip has pointer",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  render: ({ position, ...props }) => {
    const tooltipProps = {
      ...props,
      ...(position !== "top" && { position }),
    };
    return (
      <TooltipComponent {...tooltipProps}>
        <TooltipComponent.Trigger>
          <Button>Hover me</Button>
        </TooltipComponent.Trigger>
        <TooltipComponent.Content>Tooltip</TooltipComponent.Content>
      </TooltipComponent>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Tooltip: Story = {
  args: {
    position: "top",
    hasPointer: false,
  },
};
