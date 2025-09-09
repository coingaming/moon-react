import { createContext, useContext, useRef } from "react";
import mergeClasses from "../helpers/mergeClasses";
import ArrowLeft from "../assets/icons/ArrowLeftIcon";
import ArrowRight from "../assets/icons/ArrowRightIcon";

export const ScrollDirections = {
  end: "end",
  start: "start",
} as const;

type MoonCarouselContextType = {
  scrollBy: (direction: keyof typeof ScrollDirections) => void;
  reelRef: React.RefObject<HTMLDivElement | null> | null;
};

const CarouselContext = createContext<MoonCarouselContextType>({
  scrollBy: (_direction: keyof typeof ScrollDirections) => null,
  reelRef: null,
});

export function useCarouselContext() {
  const ctx = useContext(CarouselContext);
  if (!ctx) throw new Error("Carousel components must be inside <Carousel>");
  return ctx;
}

export const Carousel = ({ children }: { children: React.ReactNode }) => {
  const reelRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: keyof typeof ScrollDirections) => {
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

function getScrollAmount({
  scrollAmount,
  direction,
  reel,
}: {
  scrollAmount: number;
  direction: keyof typeof ScrollDirections;
  reel: HTMLDivElement;
}): number {
  const isRTL = getComputedStyle(reel).direction === "rtl";

  if (isRTL) {
    return direction === ScrollDirections.end ? -scrollAmount : scrollAmount;
  }
  return direction === ScrollDirections.start ? -scrollAmount : scrollAmount;
}

export const CarouselItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="moon-carousel-item">{children}</div>;
};

export const CarouselControl = ({
  className,
  direction,
  ...props
}: React.ComponentProps<"button"> & {
  direction: keyof typeof ScrollDirections;
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
      {direction === ScrollDirections.end ? <ArrowRight /> : <ArrowLeft />}
    </button>
  );
};
