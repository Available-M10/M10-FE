import { NodeSide } from "../NodeSide";
import { ChatSide } from "../ChatSide";
import { useProject } from "../../context/ProjectContext";
import { useFlow } from "../../context/FlowContext";

export function ProjectSide() {
  const { side } = useProject();
  const { nodes, edges } = useFlow();

  switch (side) {
    case "node":
      return <NodeSide />;
    case "chat":
      return <ChatSide />;
    case "save":
      console.log("저장 완료");
      console.log(nodes, edges);
      localStorage.setItem("nodes", JSON.stringify(nodes));
      localStorage.setItem("edges", JSON.stringify(edges));
      return null;
    default:
      return null;
  }
}
