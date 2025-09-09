import React, { useContext, createContext, ReactNode } from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes } from "../types";

export type SegmentedControlSizes = Extract<Sizes, "sm" | "md">;

export type SegmentedControlContextType = {
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
      "SegmentedControl components must be used within <TabList> wrapper"
    );
  }
  return context;
}

export type SegmentedControlProps = {
  children: ReactNode;
  size?: SegmentedControlSizes;
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
  className?: string;
};

export type SegmentProps = React.ComponentProps<"button"> & {
  children: ReactNode;
  className?: string;
  index: number;
};

export const SegmentedControl = ({
  children,
  size = "md",
  activeIndex,
  setActiveIndex,
  className,
}: SegmentedControlProps) => (
  <SegmentedControlContext.Provider
    value={{ activeIndex, setActiveIndex, size }}
  >
    <div
      role="tablist"
      className={mergeClasses(
        "moon-segmented-control",
        size !== "md" && `moon-segmented-control-${size}`,
        className
      )}
    >
      {children}
    </div>
  </SegmentedControlContext.Provider>
);

export const Segment = ({
  children,
  className,
  index,
  ...props
}: SegmentProps) => {
  const context = useSegmentedControlContext();
  const isActive = context.activeIndex === index;
  return (
    <button
      role="tab"
      aria-selected={isActive}
      className={mergeClasses(
        "moon-segment",
        isActive && "moon-segment-active",
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
