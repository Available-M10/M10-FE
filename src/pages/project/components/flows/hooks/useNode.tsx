import { useCallback } from "react";
import { useFlow } from "@/pages/project/context/FlowContext";
import { applyNodeChanges } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export function useNode() {
  const { nodes, setNodes } = useFlow();

  const onNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  );

  return { nodes, setNodes, onNodesChange };
}
