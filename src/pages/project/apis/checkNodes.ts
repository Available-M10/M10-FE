import { api } from "./axios";

export async function checkNode(projectId: string) {
  const res = await api.get(`/node/${projectId}`);
  console.log("전체 노드 조회", res.data);
  return res.data;
}
