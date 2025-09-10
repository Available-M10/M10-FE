import { useFlow } from "@/pages/project/context/FlowContext";

export function useAddEdge() {
  const { setEdges } = useFlow();

  const addEdgeManually = (sourceId: string, targetId: string) => {
    setEdges((eds) => [
      ...eds,
      {
        id: `e${sourceId}-${targetId}`,
        source: sourceId,
        target: targetId,
        type: "smoothstep",
        // style: { stroke: "gray", strokeWidth: 2 },
      },
    ]);
  };

  return { addEdgeManually };
}
