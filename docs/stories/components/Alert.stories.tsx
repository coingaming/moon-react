import type { Meta, StoryObj } from "@storybook/react";
import LinksBlock from "../shared/LinksBlock";
import { Alert as AlertComponent } from "@heathmont/moon-react";

type Type = React.ComponentProps<typeof AlertComponent>;

const meta: Meta<Type> = {
  title: "Messaging & feedback/Alert",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Alert" />
      ),
    },
  },
  argTypes: {
    variant: {
      description: "Defines Alert variant",
      options: ["fill", "soft", "outline"],
      control: "select",
      table: {
        defaultValue: { summary: "fill" },
      },
    },
    context: {
      description: "Defines Alert context",
      options: ["brand", "neutral", "positive", "negative", "caution", "info"],
      control: "select",
      table: {
        defaultValue: { summary: "brand" },
      },
    },
  },
  render: ({ variant, context, ...props }) => {
    const alertProps = {
      ...props,
      ...(variant !== "fill" && { variant }),
      ...(context !== "brand" && { context }),
    };
    return <AlertComponent {...alertProps}>Alert</AlertComponent>;
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Alert: Story = {
  args: { variant: "fill", context: "brand" },
};

export const AlertWithMeta: Story = {
  args: { variant: "fill", context: "brand" },
  render: ({ variant, context, ...props }) => {
    const alertProps = {
      ...props,
      ...(variant !== "fill" && { variant }),
      ...(context !== "brand" && { context }),
    };
    return (
      <AlertComponent {...alertProps}>
        Alert
        <AlertComponent.Meta>
          <AlertComponent.Action>Action</AlertComponent.Action>
          <AlertComponent.Close />
        </AlertComponent.Meta>
      </AlertComponent>
    );
  },
};

export const AlertWithContent: Story = {
  args: { variant: "fill", context: "brand" },
  render: ({ variant, context, ...props }) => {
    const alertProps = {
      ...props,
      ...(variant !== "fill" && { variant }),
      ...(context !== "brand" && { context }),
    };
    return (
      <AlertComponent {...alertProps}>
        Alert<AlertComponent.Content>Content</AlertComponent.Content>
      </AlertComponent>
    );
  },
};
