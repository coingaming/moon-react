import React, { useContext, createContext, ReactNode } from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum SegmentSizes {
  sm = "sm",
  md = "md",
}

type SegmentedControlContextType = {
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
  size: SegmentSizes;
};

const SegmentedControlContext =
  createContext<SegmentedControlContextType | null>(null);

function useSegmentedControlContext() {
  const context = useContext(SegmentedControlContext);
  if (!context) {
    throw new Error(
      "SegmentedControl components must be used within <Tabs> wrapper"
    );
  }
  return context;
}

export type SegmentedControlProps = {
  children: ReactNode;
  size?: SegmentSizes;
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
};

export type SegmentList = {
  children: ReactNode;
  className?: string;
};

export type SegmentProps = {
  children: ReactNode;
  className?: string;
  index: number;
};

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  children,
  size = SegmentSizes.md,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <SegmentedControlContext.Provider
      value={{ activeIndex, setActiveIndex, size }}
    >
      {children}
    </SegmentedControlContext.Provider>
  );
};

export const SegmentList: React.FC<
  React.ComponentProps<"ul"> & SegmentList
> = ({ children, className, ...props }) => {
  const { size } = useSegmentedControlContext();
  return (
    <div
      role="tablist"
      className={mergeClasses(
        "moon-segmented-control",
        size !== SegmentSizes.md && `moon-segmented-control-${size}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const Segment: React.FC<
  React.ComponentProps<"button"> & SegmentProps
> = ({ children, className, index, ...props }) => {
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
