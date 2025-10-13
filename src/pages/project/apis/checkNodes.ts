import { api } from "./axios";

export async function checkNode(projectId: string) {
  const res = await api.get(`/node/${projectId}`);
  return res.data;
}
