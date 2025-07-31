import React, { ReactNode, createContext, useContext } from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum TabSizes {
  sm = "sm",
  md = "md",
}

type TabsContextType = {
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
  size: TabSizes;
};

const TabsContext = createContext<TabsContextType | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within <Tabs> wrapper");
  }
  return context;
}

export type TabsProps = {
  children: ReactNode;
  size?: TabSizes;
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
};

export type TabListProps = React.ComponentProps<"ul"> & {
  children: ReactNode;
  className?: string;
};

export type TabProps = React.ComponentProps<"button"> & {
  children: ReactNode;
  className?: string;
  index: number;
};

export type TabPanelProps = React.ComponentProps<"div"> & {
  children: ReactNode;
  className?: string;
  index: number;
};

export const Tabs: React.FC<TabsProps> = ({
  children,
  size = TabSizes.md,
  activeIndex,
  setActiveIndex,
}) => (
  <TabsContext.Provider value={{ activeIndex, setActiveIndex, size }}>
    {children}
  </TabsContext.Provider>
);

export const TabList: React.FC<TabListProps> = ({
  children,
  className,
  ...props
}) => {
  const { size } = useTabsContext();
  return (
    <ul
      role="tablist"
      className={mergeClasses(
        "moon-tab-list",
        size !== TabSizes.md && `moon-tab-list-${size}`,
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

export const Tab: React.FC<TabProps> = ({
  children,
  className,
  index,
  ...props
}) => {
  const context = useTabsContext();
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

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  className,
  index,
  ...props
}) => {
  const context = useTabsContext();
  const isActive = context.activeIndex === index;
  return (
    <div role="tabpanel" className={className} hidden={!isActive} {...props}>
      {children}
    </div>
  );
};
