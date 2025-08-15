import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Snackbar, SnackbarVariants } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Snackbar>;

const meta: Meta<Type> = {
  title: "Messaging & feedback/Snackbar",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Snackbar" />
      ),
    },
  },
  argTypes: {
    variant: {
      description: "Defines Snackbar variant",
      options: Object.values(SnackbarVariants),
      control: { type: "select" },
      table: {
        defaultValue: { summary: SnackbarVariants.neutral },
      },
    },
  },
  render: ({ variant, ...props }) => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    const snackbarProps = {
      ...props,
      ...(variant !== SnackbarVariants.neutral && { variant }),
    };

    const handleButtonClick = () => {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
    };

    return (
      <>
        <Button onClick={handleButtonClick}>Click me</Button>
        {showSnackbar && (
          <div className="fixed inset-0 z-50">
            <Snackbar {...snackbarProps}>Snackbar</Snackbar>
          </div>
        )}
      </>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const SnackbarStory: Story = {
  args: { variant: SnackbarVariants.neutral },
};
