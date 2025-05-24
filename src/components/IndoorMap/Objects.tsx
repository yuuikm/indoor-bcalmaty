import { useEffect, useState } from "react";
import { FloorObject } from "utils/types";

interface ObjectsProps {
    floor: number;
    handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
    className?: string;
}

function Objects({ floor, handleObjectClick, className }: ObjectsProps) {
    const [objects, setObjects] = useState<FloorObject[]>([]);

    useEffect(() => {
        async function loadObjects() {
            try {
                let imported;
                switch (floor) {
                    case 1:
                        imported = await import("floors/floor1/Objects");
                        setObjects(imported.default);
                        break;
                    case 2:
                        imported = await import("floors/floor2/Objects");
                        setObjects(imported.default);
                        break;
                    case 3:
                        imported = await import("floors/floor3/Objects");
                        setObjects(imported.default);
                        break;
                    case 4:
                        imported = await import("floors/floor4/Objects");
                        setObjects(imported.default);
                        break;
                    case 5:
                        imported = await import("floors/floor5/Objects");
                        setObjects(imported.default);
                        break;
                    case 6:
                        imported = await import("floors/floor6/Objects");
                        setObjects(imported.default);
                        break;
                    case 7:
                        imported = await import("floors/floor7/Objects");
                        setObjects(imported.default);
                        break;
                    default:
                        setObjects([]);
                }
            } catch (err) {
                console.error("Failed to load floor objects:", err);
                setObjects([]);
            }
        }

        loadObjects();
    }, [floor]);

    return (
      <g id="Objects">
          {objects.map((obj) => (
            <path
              key={obj.id}
              id={obj.id}
              d={obj.d}
              className={`${className} object`}
              onClick={handleObjectClick}
            />
          ))}
      </g>
    );
}

export default Objects;
