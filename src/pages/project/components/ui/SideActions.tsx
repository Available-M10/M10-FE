import { tabConfig } from "../../constants/tabConfig";
import { useAddNode } from "../flows/hooks/useAddNode";
import { useNode } from "../../context/NodeContext";
import { useLLM } from "../../context/LLMContext";
import { ActionButton } from "./ActionButton";
import { NodeHandlers } from "../hooks/useNodeHandlers";

type SideActionsProps = {
  activeTab: string;
};

export function SideActions({ activeTab }: SideActionsProps) {
  const { addNode } = useAddNode({ activeTab });
  const { setNodePort, getNodePort } = useNode();
  const { prompt } = useLLM();

  const current = tabConfig[activeTab];
  const handlers = NodeHandlers({ getNodePort, setNodePort, prompt });

  return (
    <>
      <ActionButton
        icon={current.first.icon}
        text={current.first.text}
        onClick={async () => {
          if (activeTab === "본론") await handlers.handleCreateLLMNode();
          else console.log("시작 버튼 생성");
          addNode("first");
        }}
      />

      <ActionButton
        icon={current.second.icon}
        text={current.second.text}
        onClick={async () => {
          if (activeTab === "시작") await handlers.handleCreateChatNode();
          else if (activeTab === "본론") await handlers.handleNoteClick();
          addNode("second");
        }}
      />
    </>
  );
}
