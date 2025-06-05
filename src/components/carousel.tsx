import * as React from "react";
import { ArrowLeftIcon, ArrowRight } from "lucide-react";
import { Button } from "./button";
import "../../assets/css/moon-components.css";

type Direction = "left" | "right";

type MoonCarouselContextType = {
  scrollBy: (direction: "left" | "right") => void;
  reelRef: React.RefObject<HTMLDivElement | null> | null;
};

const MoonCarouselContext = React.createContext<MoonCarouselContextType>({
  scrollBy: (_direction: Direction) => null,
  reelRef: null,
});

export const MoonCarousel = ({ children }: { children: React.ReactNode }) => {
  const reelRef = React.useRef<HTMLDivElement>(null);

  const scrollBy = (direction: "left" | "right") => {
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
    <MoonCarouselContext.Provider value={{ scrollBy, reelRef }}>
      <div className="moon-carousel">{children}</div>
    </MoonCarouselContext.Provider>
  );
};

export const MoonCarouselContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { reelRef } = React.useContext(MoonCarouselContext);

  return (
    <div className="moon-carousel-reel" ref={reelRef}>
      {children}
    </div>
  );
};

export const MoonCarouselItem = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="moon-carousel-item">{children}</div>;
};

export const MoonCarouselPrev = () => {
  const { scrollBy } = React.useContext(MoonCarouselContext);

  return (
    <Button
      className="moon-carousel-control"
      onClick={() => {
        scrollBy("left");
      }}
    >
      <ArrowLeftIcon />
    </Button>
  );
};

export const MoonCarouselNext = () => {
  const { scrollBy } = React.useContext(MoonCarouselContext);

  return (
    <Button
      className="moon-carousel-control"
      onClick={() => {
        scrollBy("right");
      }}
    >
      <ArrowRight />
    </Button>
  );
};
