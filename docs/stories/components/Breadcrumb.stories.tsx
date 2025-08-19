import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb, BreadcrumbItem } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Breadcrumb>;

const meta: Meta<Type> = {
  title: "Navigation/Breadcrumb",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Breadcrumb" />
      ),
    },
  },
  render: ({ ...props }) => {
    const breadcrumbProps = {
      ...props,
    };
    const items = new Array(5).fill("");
    return (
      <Breadcrumb {...breadcrumbProps} defaultCurrentPage={4}>
        {items.map((_, index) => (
          <BreadcrumbItem key={index} index={index}>
            Item {index + 1}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const BreadcrumbStory: Story = { args: {} };
