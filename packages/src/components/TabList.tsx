import { createContext, useContext, useState } from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum TabListSizes {
  sm = "sm",
  md = "md",
}

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

export const TabList = ({
  children,
  size = TabListSizes.md,
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
          size !== TabListSizes.md && `moon-tab-list-${size}`,
          className
        )}
      >
        {children}
      </ul>
    </TabListContext.Provider>
  );
};

export const Tab = ({ children, className, index, ...props }: TabProps) => {
  const context = useTabListContext();
  const isActive = context.activeIndex === index;
  return (
    <li>
      <button
        role="tab"
        aria-selected={isActive}
        className={mergeClasses(
          "moon-tab",
          isActive && "moon-tab-active",
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

export const TabPanel = ({
  children,
  className,
  index,
  ...props
}: TabPanelProps) => {
  const context = useTabListContext();
  const isActive = context.activeIndex === index;
  return (
    <div role="tabpanel" className={className} hidden={!isActive} {...props}>
      {children}
    </div>
  );
};
