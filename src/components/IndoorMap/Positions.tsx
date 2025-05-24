import { useEffect, useState } from "react";
import { GraphData, NavigationContextType } from "utils/types";

interface PositionsProps {
  floor: number;
  positionRadius: number;
  handlePositionClick: (e: React.MouseEvent<SVGCircleElement>) => void;
  className: string;
  navigation?: NavigationContextType["navigation"];
}

function Positions({
                     floor,
                     positionRadius,
                     handlePositionClick,
                     className,
                     navigation,
                   }: PositionsProps) {
  const [graphData, setGraphData] = useState<GraphData>({
    vertices: [],
    edges: [],
  });

  const positionBackgroundColor = "#4285f4";
  const positionBackgroundRadius = positionRadius + 7;
  const positonBackgroundOpacity = 0.2;

  useEffect(() => {
    async function loadGraph() {
      try {
        let imported;
        switch (floor) {
          case 1:
            imported = await import("floors/floor1/graphData");
            break;
          case 2:
            imported = await import("../../floors/floor2/graphData");
            break;
          case 3:
            imported = await import("../../floors/floor3/graphData");
            break;
          case 4:
            imported = await import("../../floors/floor4/graphData");
            break;
          case 5:
            imported = await import("../../floors/floor5/graphData");
            break;
          case 6:
            imported = await import("floors/floor6/graphData");
            break;
          case 7:
            imported = await import("floors/floor7/graphData");
            break;
          default:
            imported = { graphData: { vertices: [], edges: [] } };
        }
        setGraphData(imported.graphData);
      } catch (err) {
        console.error("Failed to load graph data:", err);
        setGraphData({ vertices: [], edges: [] });
      }
    }

    loadGraph();
  }, [floor]);

  const startVertex = graphData.vertices.find(
    (v) => v.id === navigation?.start
  );

  function isActivePosition(vertexId: string) {
    return navigation?.start === vertexId;
  }

  return (
    <g id="Vertexes">
      {startVertex && (
        <circle
          id="background-circle"
          cx={startVertex.cx}
          cy={startVertex.cy}
          fill={positionBackgroundColor}
          opacity={positonBackgroundOpacity}
          r={positionBackgroundRadius}
        />
      )}

      {graphData.vertices.map((vertex) => (
        <circle
          key={vertex.id}
          id={vertex.id}
          onClick={vertex.objectName ? undefined : handlePositionClick}
          className={`position ${vertex.objectName ? "opacity-0" : className} ${
            isActivePosition(vertex.id) ? "position-active opacity-100" : ""
          }`}
          cx={vertex.cx}
          cy={vertex.cy}
          r={positionRadius}
        />
      ))}

      {startVertex && (
        <circle
          id="circle-animation"
          cx={startVertex.cx}
          cy={startVertex.cy}
          fill="none"
          stroke="white"
          strokeWidth={2}
          r={positionRadius}
        >
          <animate
            attributeName="stroke-width"
            values="1;3;1"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      )}
    </g>
  );
}

export default Positions;
