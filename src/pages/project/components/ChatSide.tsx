import { ChatHeader } from "./ui/ChatHeader";
import { ChatInput } from "./ui/ChatInput";

export function ChatSide() {
  return (
    <div className="w-1/4 h-[calc(100%-10%)] bg-white border border-gray-250 absolute right-0 z-10 flex flex-col">
      <ChatHeader />
      <ChatInput />
    </div>
  );
}
