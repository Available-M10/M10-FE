import { api } from "./axios";

export async function createChatNode(projectId: string) {
  const res = await api.post(`/node/${projectId}/start/chat`);
  return res.data;
}
