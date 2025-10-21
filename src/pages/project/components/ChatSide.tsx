import { useState } from "react";
import { ChatHeader } from "./ui/ChatHeader";
import { ChatInput } from "./ui/ChatInput";
import { ChatMessages } from "./ui/ChatMessages";
import { useFlow } from "../context/FlowContext";
import { createChatTrigger } from "../apis/createChatTrigger";
import { useProjectId } from "@/context/hooks/projectId";
import { useNodeStore } from "../store/useNodeStore";

export function ChatSide() {
  const { projectId } = useProjectId();
  const { messages, setMessages } = useFlow();
  const [isSending, setIsSending] = useState(false);
  const { chatNodePort } = useNodeStore();
  console.log("messages", messages);
  const handleSendMessage = async (message: string) => {
    if (!message.trim() || isSending) return;

    console.log("chatNodePort", chatNodePort, messages);
    if (!chatNodePort) {
      console.warn("Chat Node 포트 정보를 아직 불러오지 못했습니다.");
      setMessages((prev) => [
        ...prev,
        {
          role: "AI",
          message: "채팅 서버 준비 중입니다. 잠시만 기다려주세요.",
        },
      ]);
      return;
    }

    setIsSending(true);
    setMessages((prev) => [...prev, { role: "HUMAN", message }]);

    try {
      console.log("message", message);
      if (!chatNodePort) throw new Error("Chat Node 포트 없음");
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
      console.log("messagew", message);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "AI", message: "응답을 가져오지 못했습니다." },
      ]);
    } finally {
      setIsSending(false);
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
