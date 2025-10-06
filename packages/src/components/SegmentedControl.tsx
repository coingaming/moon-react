import React, { useContext, createContext, useState } from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes } from "../types";

export type SegmentedControlSizes = Extract<Sizes, "sm" | "md">;

type SegmentedControlContextType = {
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
  size: SegmentedControlSizes;
};

const SegmentedControlContext =
  createContext<SegmentedControlContextType | null>(null);

function useSegmentedControlContext() {
  const context = useContext(SegmentedControlContext);
  if (!context) {
    throw new Error(
      "SegmentedControl components must be used within <SegmentedControl> wrapper"
    );
  }
  return context;
}

type SegmentedControlProps = {
  children: React.ReactNode;
  size?: SegmentedControlSizes;
  activeIndex?: number;
  setActiveIndex?: (idx: number) => void;
  className?: string;
};

type SegmentProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
  className?: string;
  index?: number;
};

const Item = ({ children, className, index = 0, ...props }: SegmentProps) => {
  const context = useSegmentedControlContext();
  const isActive = context.activeIndex === index;
  return (
    <button
      role="tab"
      aria-selected={isActive}
      className={mergeClasses(
        "moon-segmented-control-item",
        isActive && "moon-segmented-control-item-active",
        className
      )}
      onClick={() => context.setActiveIndex(index)}
      tabIndex={isActive ? 0 : -1}
      {...props}
    >
      {children}
    </button>
  );
};

const Root = ({
  children,
  size = "md",
  activeIndex,
  setActiveIndex,
  className,
}: SegmentedControlProps) => {
  const [internalActiveIndex, setInternalActiveIndex] = useState(0);
  const currentActiveIndex = activeIndex ?? internalActiveIndex;
  const currentSetActiveIndex = setActiveIndex ?? setInternalActiveIndex;
  const childrenWithIndices = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child) && child.type === Item) {
      const childProps = child.props as SegmentProps;
      return React.cloneElement(child, {
        ...childProps,
        index: childProps.index ?? index,
      } as SegmentProps);
    }
    return child;
  });

  return (
    <SegmentedControlContext.Provider
      value={{
        activeIndex: currentActiveIndex,
        setActiveIndex: currentSetActiveIndex,
        size,
      }}
    >
      <div
        role="tablist"
        className={mergeClasses(
          "moon-segmented-control",
          size !== "md" && `moon-segmented-control-${size}`,
          className
        )}
      >
        {childrenWithIndices}
      </div>
    </SegmentedControlContext.Provider>
  );
};

Root.displayName = "SegmentedControl";
Item.displayName = "SegmentedControl.Item";

const SegmentedControl = Object.assign(Root, { Item });

export default SegmentedControl;
