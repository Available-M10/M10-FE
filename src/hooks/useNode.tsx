import { useState, useCallback } from "react";
import { applyNodeChanges } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export function useNode(initialNodes = []) {
  const [nodes, setNodes] = useState(initialNodes);

  const onNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  );

  return { nodes, setNodes, onNodesChange };
}
