import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb as BreadcrumbComponent } from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof BreadcrumbComponent>;

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
      <BreadcrumbComponent {...breadcrumbProps}>
        {items.map((_, index) => (
          <BreadcrumbComponent.Item
            key={index}
            isActive={index === items.length - 1}
          >
            {index === items.length - 1 ? (
              `Page ${index + 1}`
            ) : (
              <a href="#">Page {index + 1}</a>
            )}
          </BreadcrumbComponent.Item>
        ))}
      </BreadcrumbComponent>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Breadcrumb: Story = { args: {} };
