import { useFlow } from "@/pages/project/context/FlowContext";
import { useCallback } from "react";
import { applyEdgeChanges, addEdge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export function useEdge() {
  const { edges, setEdges } = useFlow();

  const onEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );

  const onConnect = useCallback(
    (params) =>
      setEdges((edgesSnapshot) =>
        addEdge({ ...params, type: "default" }, edgesSnapshot)
      ),
    []
  );

  return { edges, setEdges, onEdgesChange, onConnect };
}
