import { api } from "./axios";

export async function createNote(projectId: string) {
  const res = await api.post(`/node/${projectId}/document`);
  return res.data;
}
