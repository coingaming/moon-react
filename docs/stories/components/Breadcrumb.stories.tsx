import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "@heathmont/moon-react";
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
          <Breadcrumb.Item key={index} index={index}>
            {index === items.length - 1 ? (
              <>Item {index + 1}</>
            ) : (
              <a href="#">Item {index + 1}</a>
            )}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const BreadcrumbStory: Story = { args: {} };
