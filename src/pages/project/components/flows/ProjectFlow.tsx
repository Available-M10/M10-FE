import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useNode } from "@/pages/project/components/flows/hooks/useNode";
import { useEdge } from "@/pages/project/components/flows/hooks/useEdge";
import { CustomNode } from "./components/CustomNode";
import { useFlow } from "../../context/FlowContext";
import { useEffect } from "react";
import { useDel } from "./hooks/useDel";

export function ProjectFlow() {
  const { onNodesChange } = useNode([]);
  const { onEdgesChange, onConnect } = useEdge([]);
  const { nodes, edges } = useFlow();

  const { handleDeleteSelected } = useDel();
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Delete") handleDeleteSelected();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={{ custom: CustomNode }}
        fitView
        onKeyDown={(e) => {
          if (e.key === "Delete") handleDeleteSelected();
        }}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
