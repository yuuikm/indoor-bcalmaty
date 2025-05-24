import { Dispatch, SetStateAction } from "react";
import { buildGraphFromData } from "algorithms/dijkstra";
import { Navigation, NavigationContextType, ObjectItem, GraphData } from "utils/types";
import { graphData as graphData0 } from "floors/floor6/graphData";
import { graphData as graphData1 } from "floors/floor1/graphData";
import { graphData as graphData2 } from "floors/floor2/graphData";
import { graphData as graphData3 } from "floors/floor3/graphData";
import { graphData as graphData4 } from "floors/floor4/graphData";
import { graphData as graphData5 } from "floors/floor5/graphData";
import { toast } from "react-toastify";

export let routeLength = 0;

function getGraphData(floor: number): GraphData {
  switch (floor) {
    case 0:
      return graphData0;
    case 1:
      return graphData1;
    case 2:
      return graphData2;
    case 3:
      return graphData3;
    case 4:
      return graphData4;
    case 5:
      return graphData5;
    default:
      return { vertices: [], edges: [] };
  }
}

const findVertexByObjectId = (graphData: GraphData, objectId: string) =>
  graphData.vertices.find((v) => v.objectName === objectId);

export function navigateToObject(
  selectedObjectId: string,
  navigation: NavigationContextType["navigation"],
  setNavigation: NavigationContextType["setNavigation"],
  floor: number
) {
  const graphData = getGraphData(floor);
  const graph = buildGraphFromData(graphData);

  const target = findVertexByObjectId(graphData, selectedObjectId);
  if (!target) {
    console.error("Target not found");
    toast.error("Target not found");
    return;
  }

  const shortestPath = graph.calculateShortestPath(navigation.start, target.id);
  routeLength = shortestPath.length;

  const pathString = shortestPath
    .slice(1)
    .map((vertexId) => {
      const vertex = graphData.vertices.find((v) => v.id === vertexId);
      return vertex ? `L${vertex.cx} ${vertex.cy}` : "";
    })
    .join(" ");

  const startVertex = graphData.vertices.find((v) => v.id === navigation.start);
  const navigationRoutePath = document.getElementById("navigation-route");

  if (navigationRoutePath && startVertex) {
    navigationRoutePath.setAttribute(
      "d",
      `M${startVertex.cx} ${startVertex.cy} ${pathString}`
    );

    navigationRoutePath.classList.remove("path-once", "path-active");
    navigationRoutePath.classList.add("path-once");

    navigationRoutePath.addEventListener(
      "animationend",
      () => {
        navigationRoutePath.classList.remove("path-once");
        navigationRoutePath.classList.add("path-active");
      },
      { once: true }
    );
  }

  setNavigation((prev) => ({
    ...prev,
    end: selectedObjectId,
  }));
}

export function resetEdges(floor: number) {
  const graphData = getGraphData(floor);
  document.getElementById("navigation-route")?.setAttribute("d", "");

  graphData.edges.forEach((edge) => {
    const element = document.getElementById(edge.id);
    if (element) {
      element.classList.remove("path-active");
    }
  });
}

export function navigateWithDelay(
  objects: ObjectItem[],
  index: number,
  delay: number,
  navigation: Navigation,
  setNavigation: Dispatch<SetStateAction<Navigation>>,
  floor: number
) {
  if (index < objects.length) {
    const obj = objects[index];
    navigateToObject(obj.name, navigation, setNavigation, floor);

    setTimeout(() => {
      navigateWithDelay(objects, index + 1, delay, navigation, setNavigation, floor);
    }, delay);
  }
}
