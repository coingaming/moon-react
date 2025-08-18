import type { Meta, StoryObj } from "@storybook/react";
import { Switch, SwitchSizes } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Switch>;

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
      options: Object.values(SwitchSizes),
      control: { type: "select" },
      table: {
        defaultValue: { summary: SwitchSizes.sm },
      },
    },
  },
  render: ({ size, ...props }) => {
    const switchProps = {
      ...props,
      ...(size !== SwitchSizes.sm && { size }),
    };
    return <Switch {...switchProps} />;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const SwitchStory: Story = {
  args: { size: SwitchSizes.sm },
};
