import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import mergeClasses from "../helpers/mergeClasses";
import ChevronLeft from "../assets/icons/ChevronLeft";
import ChevronRight from "../assets/icons/ChevronRight";
import type { Directions } from "../types";

export type ScrollDirections = Directions;

type ContextType = {
  scrollBy: (direction: ScrollDirections) => void;
  reelRef: React.RefObject<HTMLDivElement | null>;
  canScrollStart: boolean;
  canScrollEnd: boolean;
};

const CarouselContext = createContext<ContextType | null>(null);

function useCarouselContext() {
  const ctx = useContext(CarouselContext);
  if (!ctx) throw new Error("Carousel components must be inside <Carousel>");
  return ctx;
}

const getScrollAmount = (
  scrollAmount: number,
  direction: ScrollDirections,
  reel: HTMLDivElement
): number => {
  const isRTL = getComputedStyle(reel).direction === "rtl";
  return isRTL
    ? direction === "end"
      ? -scrollAmount
      : scrollAmount
    : direction === "start"
    ? -scrollAmount
    : scrollAmount;
};

const Item = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={mergeClasses("moon-carousel-item", className)}>
      {children}
    </div>
  );
};

const Control = ({
  className,
  direction,
  ...props
}: React.ComponentProps<"button"> & {
  direction: ScrollDirections;
}) => {
  const { scrollBy, canScrollStart, canScrollEnd } = useCarouselContext();
  const isDisabled = direction === "start" ? !canScrollStart : !canScrollEnd;
  return (
    <button
      className={mergeClasses("moon-carousel-control", className)}
      disabled={isDisabled}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        if (!isDisabled) {
          scrollBy(direction);
          props?.onClick?.(e);
        }
      }}
      aria-label={direction === "start" ? "Scroll start" : "Scroll end"}
      {...props}
    >
      {direction === "end" ? <ChevronRight /> : <ChevronLeft />}
    </button>
  );
};

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
    if (!reelRef.current) return;
    const reel = reelRef.current;
    const isRTL = getComputedStyle(reel).direction === "rtl";
    const maxScrollLeft = reel.scrollWidth - reel.clientWidth;
    if (isRTL) {
      setCanScrollStart(Math.abs(reel.scrollLeft) < maxScrollLeft);
      setCanScrollEnd(reel.scrollLeft < 0);
    } else {
      setCanScrollStart(reel.scrollLeft > 0);
      setCanScrollEnd(reel.scrollLeft < maxScrollLeft);
    }
  }, []);

  const scrollBy = useCallback((direction: ScrollDirections) => {
    if (!reelRef.current) return;
    const reel = reelRef.current;
    const item = reel.querySelector(".moon-carousel-item") as HTMLElement;
    if (item) {
      const scrollAmount =
        item.offsetWidth + parseInt(getComputedStyle(reel).gap || "0", 10);
      reel.scrollBy({
        top: 0,
        left: getScrollAmount(scrollAmount, direction, reel),
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const reel = reelRef.current;
    if (!reel) return;
    updateScrollState();
    const handleScroll = () => updateScrollState();
    const handleResize = () => updateScrollState();
    reel.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      reel.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateScrollState]);
  return (
    <CarouselContext.Provider
      value={{ scrollBy, reelRef, canScrollStart, canScrollEnd }}
    >
      <div className="moon-carousel">
        {hasControls && <Control direction="start" />}
        <div className="moon-carousel-reel" ref={reelRef}>
          {children}
        </div>
        {hasControls && <Control direction="end" />}
      </div>
    </CarouselContext.Provider>
  );
};

Root.displayName = "Carousel";
Item.displayName = "Carousel.Item";

const Carousel = Object.assign(Root, { Item, Control });

export default Carousel;
