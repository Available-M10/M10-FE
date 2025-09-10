import { IconButton } from "../ui/iconButton";
import { TextButton } from "../ui/textButton";
import { LogoTitle } from "../ui/LogoTitle";
import { useProject } from "../../context/ProjectContext";

export function ProjectHead() {
  const { setSide } = useProject();
  return (
    <div className="h-[10%] border-b border-gray-250 flex justify-between px-5 text-xs">
      <LogoTitle />
      <div className="w-1/4 h-full flex items-center justify-center gap-x-3">
        <IconButton iconName="icon-chat" onclick={() => setSide("chat")} />
        <IconButton
          iconName="icon-note-project"
          onclick={() => setSide("node")}
        />
        <TextButton label="저장" onClick={() => setSide("save")} />
        <TextButton
          label="실행"
          bgColor="bg-[#FF6D5A]"
          fontColor="text-white" onClick={() => setSide("start")}
        />
      </div>
    </div>
  );
}
