// src/constants/tabConfig.ts
import iconCilck from "@/assets/icon-click.svg";
import iconAiagent from "@/assets/icon-Aiagent.svg";
import iconNote from "@/assets/icon-note-side.svg";
import iconChat from "@/assets/icon-chat-side.svg";

export const tabConfig: Record<
  string,
  {
    first: { icon: string; text: string };
    second: { icon: string; text: string };
  }
> = {
  시작: {
    first: { icon: iconCilck, text: "클릭 시 시작" },
    second: { icon: iconChat, text: "채팅 시 시작" },
  },
  본론: {
    first: { icon: iconAiagent, text: "Ai Agent" },
    second: { icon: iconNote, text: "노트 작업" },
  },
};
