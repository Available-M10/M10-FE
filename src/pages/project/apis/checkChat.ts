import { api } from "./axios";
import type { Message } from "../types/Message";

export async function checkChat(
  projectId: string,
  message: string
): Promise<Message[]> {
  const res = await api.get(`/trigger/${projectId}/chat`, {
    params: { message },
  });
  return res.data;
}
