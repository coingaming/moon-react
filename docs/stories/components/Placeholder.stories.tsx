import type { Meta, StoryObj } from "@storybook/react";
import { Placeholder } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Placeholder>;

const meta: Meta<Type> = {
  title: "Indicators & status/Placeholder",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Placeholder" />
      ),
    },
  },
  render: ({ ...props }) => {
    const placeholderProps = {
      ...props,
    };
    return (
      <div className="h-space-32">
        <Placeholder {...placeholderProps} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const PlaceholderStory: Story = { args: {} };
