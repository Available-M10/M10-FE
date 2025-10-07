import { useState } from "react";
import iconUp from "@/assets/icon-arrow_up.svg";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    onSendMessage(message);
    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="relative p-4 flex items-end">
      <input
        type="text"
        placeholder="메세지를 입력하세요"
        className="w-full border rounded border-gray-250 px-3 py-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div
        className="absolute right-6 bottom-6 bg-[#FF7D68] rounded-full aspect-square flex items-center justify-center cursor-pointer"
        onClick={handleSend}
      >
        <img src={iconUp} className="h-3/5" />
      </div>
    </div>
  );
}
