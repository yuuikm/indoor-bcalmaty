import { useEffect, useState } from "react";
import { GraphData } from "utils/types";

export default function useGraphData(floor: number): GraphData {
  const [graphData, setGraphData] = useState<GraphData>({
    vertices: [],
    edges: [],
  });

  useEffect(() => {
    async function loadGraph() {
      try {
        let imported;
        switch (floor) {
          case 0:
            imported = await import("floors/floor6/graphData");
            break;
          case 1:
            imported = await import("floors/floor1/graphData");
            break;
          case 2:
            imported = await import("floors/floor2/graphData");
            break;
          case 3:
            imported = await import("floors/floor3/graphData");
            break;
          case 4:
            imported = await import("floors/floor4/graphData");
            break;
          case 5:
            imported = await import("floors/floor5/graphData");
            break;
          default:
            imported = { graphData: { vertices: [], edges: [] } };
        }

        // @ts-ignore
        setGraphData(imported.graphData || imported.default);
      } catch (err) {
        console.error("Failed to load graph data for floor", floor, err);
        setGraphData({ vertices: [], edges: [] });
      }
    }

    loadGraph();
  }, [floor]);

  return graphData;
}
