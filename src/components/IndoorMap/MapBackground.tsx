import { ReactNode } from "react";

interface MapBackgroundProps {
  children: ReactNode;
  floor: number;
}

function MapBackground({ children, floor }: MapBackgroundProps) {
  const mapPath = `/floors/floor${floor}/map.svg`;

  return (
    <svg
      viewBox="0 0 1461.9 1149.1"
      className="lg:h-[85vh] lg:w-[75vw] h-[85dvh]"
    >
      <image id="background" width="100%" height="100%" href={mapPath} />
      {children}
    </svg>
  );
}

export default MapBackground;
