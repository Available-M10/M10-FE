import { NodeSide } from "../NodeSide";
import { ChatSide } from "../ChatSide";
import { useProject } from "../../context/ProjectContext";

export function ProjectSide() {
  const { side } = useProject();

  switch (side) {
    case "node":
      return <NodeSide />;
    case "chat":
      return <ChatSide />;
    default:
      return null;
  }
}
