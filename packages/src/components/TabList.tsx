import React, { useState } from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes } from "../types";

export type TabListSizes = Extract<Sizes, "sm" | "md">;

type TabListProps = {
  children: React.ReactNode;
  size?: TabListSizes;
  defaultActiveIndex?: number;
  className?: string;
  onTabChange?: (index: number) => void;
};

type TabProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
  tabIndex: number;
  onTabChange: (index: number) => void;
};

const Item = ({
  children,
  className,
  isActive,
  tabIndex,
  onTabChange,
  ...props
}: TabProps) => (
  <li>
    <button
      role="tab"
      aria-selected={isActive}
      className={mergeClasses(
        "moon-tab-list-item",
        isActive && "moon-tab-list-item-active",
        className
      )}
      onClick={() => onTabChange(tabIndex)}
      tabIndex={isActive ? 0 : -1}
      {...props}
    >
      {children}
    </button>
  </li>
);

const Root = ({
  children,
  size = "md",
  defaultActiveIndex = 0,
  className,
  onTabChange,
}: TabListProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const handleTabChange = (index: number) => {
    setActiveIndex(index);
    onTabChange?.(index);
  };
  const items = React.Children.toArray(children);
  return (
    <ul
      role="tablist"
      className={mergeClasses(
        "moon-tab-list",
        size !== "md" && `moon-tab-list-${size}`,
        className
      )}
    >
      {items.map((child, index) => {
        if (React.isValidElement(child) && child.type === Item) {
          return React.cloneElement(child, {
            ...(child.props as any),
            key: index,
            isActive: activeIndex === index,
            tabIndex: index,
            onTabChange: handleTabChange,
          } as any);
        }
        return child;
      })}
    </ul>
  );
};

Root.displayName = "TabList";
Item.displayName = "TabList.Item";

const TabList = Object.assign(Root, { Item });

export default TabList;
