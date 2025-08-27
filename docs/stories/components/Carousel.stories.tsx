import type { Meta, StoryObj } from "@storybook/react";
import { Carousel, CarouselItem } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Carousel>;

const meta: Meta<Type> = {
  title: "Content display/Carousel",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Carousel" />
      ),
    },
  },
  render: ({ ...props }) => {
    const carouselProps = {
      ...props,
    };
    const items = new Array(5).fill("");
    return (
      <Carousel {...carouselProps}>
        {items.map((_, index) => (
          <CarouselItem key={index}>
            <div className="flex items-center justify-center h-space-160 w-2xs bg-brand-subtle text-brand">
              Item {index + 1}
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const CarouselStory: Story = { args: {} };
