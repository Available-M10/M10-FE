import { ReactFlow, Background, Controls } from "@xyflow/react";
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
  const { onEdgesChange, onConnect } = useEdge([]);
  const { onNodesChange } = useDel([]);
  const { projectId, setNodeData } = useProjectId();

  useEffect(() => {
    async function loadNodes() {
      try {
        const apiNodes = await checkNode(projectId);
        const transformed = transformApiNodes(apiNodes);
        setNodes(transformed);
        setNodeData(apiNodes);
      } catch (error) {
        console.error("Node 로드 실패:", error);
      }
    }
    if (projectId) loadNodes();
  }, [projectId, setNodes]);

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
