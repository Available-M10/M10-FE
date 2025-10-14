import { IconButton } from "../ui/iconButton";
import { TextButton } from "../ui/textButton";
import { LogoTitle } from "../ui/LogoTitle";
import { useProject } from "../../context/ProjectContext";
import { NodeHandlers } from "../hooks/useNodeHandlers";
import { useLLM } from "../../context/LLMContext";
import { useNode } from "../flows/hooks/useNode";
import { useProjectId } from "@/context/hooks/projectId";

export function ProjectHead() {
  const { setSide } = useProject();
  const { prompt } = useLLM();
  const { getNodePort, setNodePort } = useNode();
  const { projectId } = useProjectId();

  const { handleNoteClick } = NodeHandlers({
    getNodePort,
    setNodePort,
    prompt,
    projectId,
  });
  return (
    <div className="h-[10%] border-b border-gray-250 flex justify-between px-5 text-xs">
      <LogoTitle />
      <div className="w-1/6 h-full flex items-center justify-center gap-x-3">
        <IconButton iconName="icon-chat" onclick={() => setSide("chat")} />
        <IconButton
          iconName="icon-note-project"
          onclick={() => setSide("node")}
        />
        <TextButton
          label="실행"
          bgColor="bg-[#FF6D5A]"
          fontColor="text-white"
          onClick={handleNoteClick}
        />
      </div>
    </div>
  );
}
