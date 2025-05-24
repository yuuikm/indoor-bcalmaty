import useGraphData from "utils/useGraphData";

function Paths({ floor }: { floor: number }) {
  const graphData = useGraphData(floor);

  return (
    <g id="Edges">
      {graphData.edges.map((edge) => {
        const from = graphData.vertices.find((v) => v.id === edge.from);
        const to = graphData.vertices.find((v) => v.id === edge.to);
        if (!from || !to) return null;

        return (
          <path
            key={edge.id}
            id={edge.id}
            className="path"
            d={`M${from.cx} ${from.cy}L${to.cx} ${to.cy}`}
          />
        );
      })}
      <path id="navigation-route" className="path" d="" fill="none" />
    </g>
  );
}

export default Paths;
