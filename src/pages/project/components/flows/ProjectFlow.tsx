import { ReactFlow, Background, Controls } from "@xyflow/react";
import type { Node } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { CustomNode } from "./components/CustomNode";
import { useFlow } from "../../context/FlowContext";
import { useEffect } from "react";
import { checkNode } from "../../apis/checkNodes";
import { useProjectId } from "@/context/hooks/projectId";
import { transformApiNodes } from "../../utils/transformApiNodes";
import { useEdge } from "./hooks/useEdge";
import { useDel } from "./hooks/useDel";

export function ProjectFlow() {
  const { nodes, edges, setNodes } = useFlow();
  const { onEdgesChange, onConnect } = useEdge();
  const { onNodesChange } = useDel();
  const { projectId, setNodeData, portInfo } = useProjectId();
  console.log("daasda", portInfo);
  useEffect(() => {
    async function loadNodes() {
      try {
        console.log("aaaaaaaaaaaaaaaaaaa", portInfo);
        const apiNodes = await checkNode(projectId);
        console.log("bbbbbbbbbbbbbbbbb", apiNodes);
        const transformed = transformApiNodes(apiNodes);
        console.log("Transformed Nodes:", transformed);
        setNodes(transformed);
        setNodeData(apiNodes);
      } catch (error) {
        console.error("Node 로드 실패:", error);
      }
    }
    if (projectId) loadNodes();
  }, [projectId, setNodes]);

  const handleNodeClick = (_event: React.MouseEvent, node: Node) => {
    console.log("Clicked Node Info:", {
      id: node.id,
      data: node.data,
    });
  };

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={handleNodeClick}
        nodeTypes={{ custom: CustomNode }}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
