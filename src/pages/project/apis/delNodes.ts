import { api } from "./axios";

export async function delNodes(projectId: string) {
  const res = await api.delete(`/node/${projectId}`);
  return res.data;
}
