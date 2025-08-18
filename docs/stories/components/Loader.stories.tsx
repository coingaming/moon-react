import type { Meta, StoryObj } from "@storybook/react";
import { Loader, LoaderSizes } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Loader>;

const meta: Meta<Type> = {
  title: "Indicators & status/Loader",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Loader" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines Loader size",
      options: Object.values(LoaderSizes),
      control: { type: "select" },
      table: {
        defaultValue: { summary: LoaderSizes.md },
      },
    },
  },
  render: ({ size, ...props }) => {
    const loaderProps = {
      ...props,
      ...(size !== LoaderSizes.md && { size }),
    };
    return <Loader {...loaderProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const LoaderStory: Story = {
  args: {
    size: LoaderSizes.md,
  },
};
