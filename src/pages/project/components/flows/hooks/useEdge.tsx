import { useState, useCallback } from "react";
import { applyEdgeChanges, addEdge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export function useEdge(initialEdges = []) {
  const [edges, setEdges] = useState(initialEdges);

  const onEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  );

  return { edges, setEdges, onEdgesChange, onConnect };
}
