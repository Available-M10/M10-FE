import type { Message } from "../../types/Message";

interface ChatMessagesProps {
  messages: Message[];
}

export function ChatMessages({ messages, role }: ChatMessagesProps) {
  console.log(role, "");
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-2 flex flex-col">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`p-2 rounded-lg max-w-[70%] break-words ${
            msg.role === "HUMAN"
              ? "self-end bg-[#FF7D68] text-white"
              : "self-start bg-gray-200 text-black"
          }`}
        >
          {msg.message}
        </div>
      ))}
    </div>
  );
}
