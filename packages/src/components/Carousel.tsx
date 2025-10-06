import React, { useRef, useState, useEffect, useCallback } from "react";
import mergeClasses from "../helpers/mergeClasses";
import ChevronLeft from "../assets/icons/ChevronLeft";
import ChevronRight from "../assets/icons/ChevronRight";
import type { Directions } from "../types";

export type ScrollDirections = Directions;

const Item = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={mergeClasses("moon-carousel-item", className)}>
    {children}
  </div>
);

const Control = ({
  className,
  direction,
  disabled,
  onScrollDirection,
  ...props
}: React.ComponentProps<"button"> & {
  direction: ScrollDirections;
  disabled?: boolean;
  onScrollDirection: (direction: ScrollDirections) => void;
}) => (
  <button
    className={mergeClasses("moon-carousel-control", className)}
    disabled={disabled}
    onClick={() => onScrollDirection(direction)}
    aria-label={direction === "previous" ? "Previous" : "Next"}
    {...props}
  >
    {direction === "next" ? <ChevronRight /> : <ChevronLeft />}
  </button>
);

const Root = ({
  hasControls,
  children,
}: {
  children: React.ReactNode;
  hasControls?: boolean;
}) => {
  const reelRef = useRef<HTMLDivElement>(null);
  const [canScrollStart, setCanScrollStart] = useState(false);
  const [canScrollEnd, setCanScrollEnd] = useState(true);

  const updateScrollState = useCallback(() => {
    const reel = reelRef.current;
    if (!reel) return;

    const isRTL = getComputedStyle(reel).direction === "rtl";
    const maxScrollLeft = reel.scrollWidth - reel.clientWidth;

    if (isRTL) {
      setCanScrollStart(reel.scrollLeft < 0);
      setCanScrollEnd(reel.scrollLeft > -maxScrollLeft);
    } else {
      setCanScrollStart(reel.scrollLeft > 0);
      setCanScrollEnd(reel.scrollLeft < maxScrollLeft);
    }
  }, []);

  const handleScroll = useCallback((direction: ScrollDirections) => {
    const reel = reelRef.current;
    if (!reel) return;

    const item = reel.querySelector(".moon-carousel-item") as HTMLElement;
    if (!item) return;

    const gap = parseInt(getComputedStyle(reel).gap || "0", 10);
    const scrollAmount = item.offsetWidth + gap;
    const isRTL = getComputedStyle(reel).direction === "rtl";

    let scrollValue: number;
    if (isRTL) {
      scrollValue = direction === "previous" ? scrollAmount : -scrollAmount;
    } else {
      scrollValue = direction === "previous" ? -scrollAmount : scrollAmount;
    }

    reel.scrollBy({
      left: scrollValue,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const reel = reelRef.current;
    if (!reel) return;

    updateScrollState();

    const handleScrollEvent = () => updateScrollState();
    const handleResize = () => updateScrollState();

    reel.addEventListener("scroll", handleScrollEvent);
    window.addEventListener("resize", handleResize);

    return () => {
      reel.removeEventListener("scroll", handleScrollEvent);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateScrollState]);

  return (
    <div className="moon-carousel">
      {hasControls && (
        <Control
          direction="previous"
          disabled={!canScrollStart}
          onScrollDirection={handleScroll}
        />
      )}
      <div className="moon-carousel-reel" ref={reelRef}>
        {children}
      </div>
      {hasControls && (
        <Control
          direction="next"
          disabled={!canScrollEnd}
          onScrollDirection={handleScroll}
        />
      )}
    </div>
  );
};

Root.displayName = "Carousel";
Item.displayName = "Carousel.Item";

const Carousel = Object.assign(Root, { Item });

export default Carousel;
