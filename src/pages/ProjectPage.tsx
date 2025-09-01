import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useNode } from "@/hooks/useNode";
import { useEdge } from "@/hooks/useEdge";

export function ProjectPage() {
  const initialNodes = [
    {
      id: "n1",
      position: { x: 0, y: 0 },
      data: { label: "Node 1" },
      type: "input",
    },
    { id: "n2", position: { x: 100, y: 100 }, data: { label: "Node 2" } },
  ];

  const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }];

  const { nodes, setNodes, onNodesChange } = useNode(initialNodes);
  const { edges, setEdges, onEdgesChange, onConnect } = useEdge(initialEdges);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
