import React, { createContext, useContext, useState } from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes } from "../types";

export type TabListSizes = Extract<Sizes, "sm" | "md">;

type TabListContextType = {
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
  size: TabListSizes;
};

const TabListContext = createContext<TabListContextType | null>(null);

function useTabListContext() {
  const context = useContext(TabListContext);
  if (!context) {
    throw new Error("Tab components must be used within <TabList> wrapper");
  }
  return context;
}

type TabListProps = {
  children: React.ReactNode;
  size?: TabListSizes;
  defaultActiveIndex?: number;
  className?: string;
};

type TabProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
  className?: string;
  index: number;
};

type TabPanelProps = React.ComponentProps<"div"> & {
  children: React.ReactNode;
  className?: string;
  index: number;
};

const Item = ({ children, className, index, ...props }: TabProps) => {
  const context = useTabListContext();
  const isActive = context.activeIndex === index;
  return (
    <li>
      <button
        role="tab"
        aria-selected={isActive}
        className={mergeClasses(
          "moon-tab-list-item",
          isActive && "moon-tab-list-item-active",
          className
        )}
        onClick={() => context.setActiveIndex(index)}
        tabIndex={isActive ? 0 : -1}
        {...props}
      >
        {children}
      </button>
    </li>
  );
};

const ItemPanel = ({ children, className, index, ...props }: TabPanelProps) => {
  const context = useTabListContext();
  const isActive = context.activeIndex === index;
  return (
    <div role="tabpanel" className={className} hidden={!isActive} {...props}>
      {children}
    </div>
  );
};

const Root = ({
  children,
  size = "md",
  defaultActiveIndex = 0,
  className,
}: TabListProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  return (
    <TabListContext.Provider value={{ activeIndex, setActiveIndex, size }}>
      <ul
        role="tablist"
        className={mergeClasses(
          "moon-tab-list",
          size !== "md" && `moon-tab-list-${size}`,
          className
        )}
      >
        {children}
      </ul>
    </TabListContext.Provider>
  );
};

Root.displayName = "TabList";
Item.displayName = "TabList.Item";
ItemPanel.displayName = "TabList.ItemPanel";

const TabList = Object.assign(Root, { Item, ItemPanel });

export default TabList;
