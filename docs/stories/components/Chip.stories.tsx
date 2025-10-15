import type { Meta, StoryObj } from "@storybook/react";
import { Chip as ChipComponent } from "@moondesignsystem/react";
import LinksBlock from "../shared/LinksBlock";
import { useState } from "react";

type Type = React.ComponentProps<typeof ChipComponent>;

const meta: Meta<Type> = {
  title: "Forms & selection controls/Chip",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Chip" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines Chip size",
      options: ["sm", "md"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      description: "Defines Chip variant",
      options: ["fill", "outline", "soft"],
      control: "select",
      table: {
        defaultValue: { summary: "fill" },
      },
    },
    isActive: {
      description: "Defines if Chip is active",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  render: ({ variant, size, isActive, ...props }) => {
    const [localActive, setLocalActive] = useState(false);
    const currentActive = isActive || localActive;
    const chipProps = {
      ...props,
      ...(variant !== "fill" && { variant }),
      ...(size !== "md" && { size }),
    };
    return (
      <ChipComponent
        {...chipProps}
        isActive={currentActive}
        onClick={() => setLocalActive(!localActive)}
      >
        Chip
      </ChipComponent>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Chip: Story = {
  args: {
    size: "md",
    variant: "fill",
    isActive: false,
  },
};
