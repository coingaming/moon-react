import React, { useContext } from "react";
import { Button } from "./button";
import mergeClasses from "../helpers";
import ArrowLeft from "../assets/icons/ArrowLeft";
import ArrowRight from "../assets/icons/ArrowRight";

export enum ScrollDirecion {
  right = "right",
  left = "left",
}

type MoonCarouselContextType = {
  scrollBy: (direction: ScrollDirecion) => void;
  reelRef: React.RefObject<HTMLDivElement | null> | null;
};

const CarouselContext = React.createContext<MoonCarouselContextType>({
  scrollBy: (_direction: ScrollDirecion) => null,
  reelRef: null,
});

export function useCarouselContext() {
  const ctx = useContext(CarouselContext);
  if (!ctx) throw new Error("Carousel components must be inside <Carousel>");
  return ctx;
}

export const Carousel = ({ children }: { children: React.ReactNode }) => {
  const reelRef = React.useRef<HTMLDivElement>(null);

  const scrollBy = (direction: ScrollDirecion) => {
    if (!reelRef.current) return;

    const reel = reelRef.current;
    const item = reel.querySelector(".moon-carousel-item") as HTMLElement;

    if (item) {
      const scrollAmount =
        item.offsetWidth + parseInt(getComputedStyle(reel).gap || "0", 10);

      reel.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <CarouselContext.Provider value={{ scrollBy, reelRef }}>
      {children}
    </CarouselContext.Provider>
  );
};

export const CarouselContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { reelRef } = useCarouselContext();

  return (
    <div className="moon-carousel">
      <div className="moon-carousel-reel" ref={reelRef}>
        {children}
      </div>
    </div>
  );
};

export const CarouselItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="moon-carousel-item">{children}</div>;
};

export const CarouselControl = ({
  className,
  direction,
  ...props
}: React.ComponentProps<"button"> & {
  direction: ScrollDirecion;
}) => {
  const { scrollBy } = useCarouselContext();

  return (
    <Button
      className={mergeClasses("moon-carousel-control", className)}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        scrollBy(direction);
        props?.onClick?.(e);
      }}
      {...props}
    >
      {direction === ScrollDirecion.right ? <ArrowRight /> : <ArrowLeft />}
    </Button>
  );
};
