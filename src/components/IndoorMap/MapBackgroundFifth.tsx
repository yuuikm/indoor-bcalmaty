import floorplan from "@/assets/img/5-floor.svg";
import { ReactNode } from "react";
interface MapBackgroundFifthProps {
  children: ReactNode;
}

function MapBackgroundFifth({ children }: MapBackgroundFifthProps) {
  return (
    <svg
      viewBox="0.469 0.006 1461.95 1149.136"
      className="lg:h-[85vh] lg:w-[75vw] h-[85dvh]"
    >
      <image id="background" width="100%" height="100%" href={floorplan} />
      {children}
    </svg>
  );
}

export default MapBackgroundFifth;
