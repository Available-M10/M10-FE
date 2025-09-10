import { useFlow } from "@/pages/project/context/FlowContext";
import { useReactFlow } from "@xyflow/react";

export function useDel() {
  const { nodes, edges, setNodes, setEdges } = useFlow();
  const reactFlow = useReactFlow();

  const handleDeleteSelected = () => {
    const selectedNodes = reactFlow.getNodes().filter((node) => node.selected);
    const idsToDelete = selectedNodes.map((n) => n.id);
    if (!idsToDelete.length) return;

    reactFlow.deleteElements({ nodes: selectedNodes });

    const updatedNodes = nodes.filter((n) => !idsToDelete.includes(n.id));
    const updatedEdges = edges.filter(
      (e) => !idsToDelete.includes(e.source) && !idsToDelete.includes(e.target)
    );

    setNodes(updatedNodes);
    setEdges(updatedEdges);

    // localStorage.setItem("nodes", JSON.stringify(updatedNodes));
    // localStorage.setItem("edges", JSON.stringify(updatedEdges));
  };

  return { handleDeleteSelected };
}
