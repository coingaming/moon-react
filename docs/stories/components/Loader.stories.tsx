import type { Meta, StoryObj } from "@storybook/react";
import { Loader as LoaderComponent } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof LoaderComponent>;

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
      options: ["2xs", "xs", "sm", "md", "lg"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
  },
  render: ({ size, ...props }) => {
    const loaderProps = {
      ...props,
      ...(size !== "md" && { size }),
    };
    return <LoaderComponent {...loaderProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Loader: Story = {
  args: {
    size: "md",
  },
};
