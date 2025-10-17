import { tabConfig } from "../../constants/tabConfig";
import { useAddNode } from "../flows/hooks/useAddNode";
import { useLLM } from "../../context/LLMContext";
import { ActionButton } from "./ActionButton";
import { NodeHandlers } from "../hooks/useNodeHandlers";
import { useProjectId } from "@/context/hooks/projectId";
import { useEffect } from "react";

type SideActionsProps = {
  activeTab: string;
};

export function SideActions({ activeTab }: SideActionsProps) {
  const { addNode } = useAddNode({ activeTab });
  const { prompt } = useLLM();
  const { portInfo } = useProjectId();
  const current = tabConfig[activeTab];
  const handlers = NodeHandlers({ prompt });

  useEffect(() => {
    console.log("✅ portInfo 최신 상태:", portInfo);
  }, [portInfo]);

  return (
    <>
      <ActionButton
        icon={current.first.icon}
        text={current.first.text}
        onClick={async () => {
          if (activeTab === "본론") {
            const chatNodeExists = portInfo.some(
              (n) => n.type === "CHAT" || n.type === "START"
            );

            if (!chatNodeExists) {
              console.log(
                "⚠️ Chat 노드가 존재하지 않습니다. 먼저 생성해주세요."
              );
              return;
            }

            console.log("✅ Chat 노드가 있으므로 LLM 노드 생성 시작");
            await handlers.handleCreateLLMNode();
          } else {
            alert("이거 클릭해도 암것도 없음")
          }

          addNode("first");
        }}
      />
      <ActionButton
        icon={current.second.icon}
        text={current.second.text}
        onClick={async () => {
          if (activeTab === "시작") {
            const chatNodeExists = portInfo.some((p) => p.type === "CHAT");

            if (chatNodeExists) {
              console.log("⚠️ 이미 CHAT 노드가 존재합니다.");
              return;
            }

            console.log("✅ Chat 노드 생성 시작");
            await handlers.handleCreateChatNode();
          } else if (activeTab === "본론") {
            await handlers.handleNoteClick();
          }

          addNode("second");
        }}
      />
    </>
  );
}
