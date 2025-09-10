import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useNode } from "@/pages/project/components/flows/hooks/useNode";
import { useEdge } from "@/pages/project/components/flows/hooks/useEdge";
import { CustomNode } from "./components/CustomNode";
import { useFlow } from "../../context/FlowContext";

export function ProjectFlow() {
  const { onNodesChange } = useNode([]);
  const { onEdgesChange, onConnect } = useEdge([]);
  const { nodes, edges } = useFlow();

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
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
