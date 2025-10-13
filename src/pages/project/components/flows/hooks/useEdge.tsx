import { useCallback } from "react";
import { applyEdgeChanges, addEdge } from "@xyflow/react";
import { useFlow } from "@/pages/project/context/FlowContext";

export function useEdge() {
  const { edges, setEdges } = useFlow();

  const onEdgesChange = useCallback(
    (changes) => setEdges((prev) => applyEdgeChanges(changes, prev)),
    [setEdges]
  );

  const onConnect = useCallback(
    (params) => {
      setEdges((prev) => addEdge({ ...params, type: "default" }, prev));
    },
    [setEdges]
  );

  return { edges, setEdges, onEdgesChange, onConnect };
}
