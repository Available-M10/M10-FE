import { useEffect, useState } from "react";
import { ChatHeader } from "./ui/ChatHeader";
import { ChatInput } from "./ui/ChatInput";
import { ChatMessages } from "./ui/ChatMessages";
import { useFlow } from "../context/FlowContext";
import { createChatTrigger } from "../apis/createChatTrigger";
import type { projectIdProps } from "../types/projectId";
import { useNode } from "../context/NodeContext";

export function ChatSide({ projectId }: projectIdProps) {
  const { messages, setMessages } = useFlow();
  const { getNodePort } = useNode();
  const [chatNodePort, setChatNodePort] = useState<string | null>(null);

  useEffect(() => {
    const chatNode = getNodePort("CHAT");
    if (chatNode?.outPortId) {
      setChatNodePort(chatNode.outPortId);
      console.log("Chat Node 포트 로드:", chatNode.outPortId);
    }
  }, [getNodePort]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { role: "HUMAN", message }]);

    if (!chatNodePort) {
      console.error("Chat Node 포트 정보를 찾을 수 없습니다.");
      return;
    }

    try {
      const chatResponse = await createChatTrigger(
        projectId,
        chatNodePort,
        message
      );

      if (chatResponse) {
        setMessages((prev) => [
          ...prev,
          { role: chatResponse.role, message: chatResponse.message },
        ]);
      }
    } catch (err) {
      console.error("Chat Trigger 호출 실패:", err);
      setMessages((prev) => [
        ...prev,
        { role: "AI", message: "응답을 가져오지 못했습니다." },
      ]);
    }
  };

  return (
    <div className="w-1/4 h-[calc(100%-10%)] bg-white border border-gray-250 absolute right-0 z-10 flex flex-col">
      <ChatHeader />
      <ChatMessages messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}
