import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Pagination>;

const meta: Meta<Type> = {
  title: "Navigation/Pagination",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Pagination" />
      ),
    },
  },
  render: ({ ...props }) => {
    const paginationProps = {
      ...props,
    };
    const items = new Array(5).fill("");
    return (
      <Pagination {...paginationProps}>
        {items.map((_, index) => (
          <Pagination.Item key={index} index={index}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const PaginationStory: Story = { args: {} };
