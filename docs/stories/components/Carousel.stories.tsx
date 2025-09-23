import type { Meta, StoryObj } from "@storybook/react";
import { Carousel as CarouselComponent } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof CarouselComponent> & {
  hasControls?: boolean;
};

const meta: Meta<Type> = {
  title: "Content display/Carousel",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Carousel" />
      ),
    },
  },
  argTypes: {
    hasControls: {
      description: "Has controls or not",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  render: ({ hasControls, ...props }) => {
    const carouselProps = {
      ...props,
    };
    const items = new Array(5).fill("");
    return (
      <CarouselComponent {...carouselProps} hasControls={hasControls}>
        {items.map((_, index) => (
          <CarouselComponent.Item key={index}>
            <div className="flex items-center justify-center h-space-160 w-2xs bg-brand-subtle text-brand">
              Item {index + 1}
            </div>
          </CarouselComponent.Item>
        ))}
      </CarouselComponent>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Carousel: Story = {
  args: {
    hasControls: false,
  },
};
