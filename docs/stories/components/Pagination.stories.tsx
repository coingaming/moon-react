import type { Meta, StoryObj } from "@storybook/react";
import { Pagination as PaginationComponent } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof PaginationComponent>;

const meta: Meta<Type> = {
  title: "Navigation/Pagination",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Pagination" />
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
  render: ({ ...props }) => {
    const paginationProps = {
      ...props,
    };
    return (
      <PaginationComponent
        {...paginationProps}
        length={5}
      ></PaginationComponent>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Pagination: Story = { args: { hasControls: false } };
