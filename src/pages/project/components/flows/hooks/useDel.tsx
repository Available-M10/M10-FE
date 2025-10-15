import { useFlow } from "@/pages/project/context/FlowContext";
import type { NodeChange } from "@xyflow/react";
import { applyNodeChanges } from "@xyflow/react";
import { delNodes } from "@/pages/project/apis/delNodes";
import { useProjectId } from "@/context/hooks/projectId";

export function useDel() {
  const { setNodes } = useFlow();
  const {projectId } = useProjectId()
 
  const onNodesChange = (changes: NodeChange[]) => {
    setNodes((prevNodes) => {
      const newNodes = applyNodeChanges(changes, prevNodes);

      const deletedNodes = prevNodes.filter(
        (n) => !newNodes.find((nn) => nn.id === n.id)
      );

      if (deletedNodes) {
        delNodes(projectId)
          .then(() => console.log("삭제 성공"))
          .catch(() => "삭제 실패");
      }

      return newNodes;
    });
  };

  return { onNodesChange };
}
