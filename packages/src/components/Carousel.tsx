import React, { createContext, useContext, useRef } from "react";
import mergeClasses from "../helpers/mergeClasses";
import ArrowLeft from "../assets/icons/ArrowLeft";
import ArrowRight from "../assets/icons/ArrowRight";
import type { Directions } from "../types";

export type ScrollDirections = Directions;

type CarouselContextType = {
  scrollBy: (direction: ScrollDirections) => void;
  reelRef: React.RefObject<HTMLDivElement | null> | null;
};

const CarouselContext = createContext<CarouselContextType>({
  scrollBy: (_direction: ScrollDirections) => null,
  reelRef: null,
});

function useCarouselContext() {
  const ctx = useContext(CarouselContext);
  if (!ctx) throw new Error("Carousel components must be inside <Carousel>");
  return ctx;
}

function getScrollAmount({
  scrollAmount,
  direction,
  reel,
}: {
  scrollAmount: number;
  direction: ScrollDirections;
  reel: HTMLDivElement;
}): number {
  const isRTL = getComputedStyle(reel).direction === "rtl";

  if (isRTL) {
    return direction === "end" ? -scrollAmount : scrollAmount;
  }
  return direction === "start" ? -scrollAmount : scrollAmount;
}

const Item = ({ children }: { children: React.ReactNode }) => {
  return <div className="moon-carousel-item">{children}</div>;
};

const Control = ({
  className,
  direction,
  ...props
}: React.ComponentProps<"button"> & {
  direction: ScrollDirections;
}) => {
  const { scrollBy } = useCarouselContext();

  return (
    <button
      className={mergeClasses("moon-carousel-control", className)}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        scrollBy(direction);
        props?.onClick?.(e);
      }}
      {...props}
    >
      {direction === "end" ? <ArrowRight /> : <ArrowLeft />}
    </button>
  );
};

const Root = ({ children }: { children: React.ReactNode }) => {
  const reelRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: ScrollDirections) => {
    if (!reelRef.current) return;

    const reel = reelRef.current;
    const item = reel.querySelector(".moon-carousel-item") as HTMLElement;

    if (item) {
      const scrollAmount =
        item.offsetWidth + parseInt(getComputedStyle(reel).gap || "0", 10);

      reel.scrollBy({
        top: 0,
        left: getScrollAmount({ scrollAmount, direction, reel }),
        behavior: "smooth",
      });
    }
  };

  return (
    <CarouselContext.Provider value={{ scrollBy, reelRef }}>
      <div className="moon-carousel">
        <div className="moon-carousel-reel" ref={reelRef}>
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

Root.displayName = "Carousel";
Item.displayName = "Carousel.Item";
Control.displayName = "Carousel.Control";

const Carousel = Object.assign(Root, { Item, Control });

export default Carousel;
