import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Carousel> & {
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
      <Carousel {...carouselProps}>
        {hasControls && <Carousel.Control direction="start" />}
        {items.map((_, index) => (
          <Carousel.Item key={index}>
            <div className="flex items-center justify-center h-space-160 w-2xs bg-brand-subtle text-brand">
              Item {index + 1}
            </div>
          </Carousel.Item>
        ))}
        {hasControls && <Carousel.Control direction="end" />}
      </Carousel>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const CarouselStory: Story = {
  args: {
    hasControls: false,
  },
};
