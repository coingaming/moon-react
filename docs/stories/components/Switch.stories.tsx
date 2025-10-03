import type { Meta, StoryObj } from "@storybook/react";
import { Switch as SwitchComponent } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof SwitchComponent>;

const meta: Meta<Type> = {
  title: "Forms & selection controls/Switch",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Switch" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines Switch size",
      options: ["2xs", "xs", "sm"],
      control: "select",
      table: {
        defaultValue: { summary: "sm" },
      },
    },
  },
  render: ({ size, ...props }) => {
    const switchProps = {
      ...props,
      ...(size !== "sm" && { size }),
    };
    return <SwitchComponent {...switchProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Switch: Story = {
  args: { size: "sm" },
};
