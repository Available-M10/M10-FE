import { useFlow } from "@/pages/project/context/FlowContext";
import type { NodeChange } from "@xyflow/react";
import { applyNodeChanges } from "@xyflow/react";
import { delNodes } from "@/pages/project/apis/delNodes";
import { useProjectId } from "@/context/hooks/projectId";

export function useDel() {
  const { setNodes } = useFlow();
  const { portInfo } = useProjectId();

  const onNodesChange = (changes: NodeChange[]) => {
    const removedNodes = changes.filter((change) => change.type === "remove");
    if (removedNodes.length > 0) {
      removedNodes.forEach((removed) => {
        const nodeId = removed.id;
        const NodeIdInfo = portInfo.find((n) => n.nodeId);
        const delNodeId = NodeIdInfo?.nodeId;
        console.log("nodeId", nodeId);
        console.log("portInfo", portInfo);
        console.log("NodeIdInfo", delNodeId);
        delNodes(delNodeId)
          .then(() => console.log(`노드 ${delNodeId} 삭제 성공`, portInfo))
          .catch(() => console.log(`노드 ${delNodeId} 삭제 실패`));
      });
    }

    setNodes((prevNodes) => applyNodeChanges(changes, prevNodes));
  };

  return { onNodesChange };
}
