import { api } from "./axios";

export async function delNodes(nodeId: string) {
  if (!nodeId) {
    console.error("삭제할 노드 ID가 없습니다.");
    return null;
  }

  try {
    const res = await api.delete(`/node/${nodeId}`);
    console.log(`노드 ${nodeId} 삭제 성공`);
    return res.data;
  } catch (err) {
    console.error(`노드 ${nodeId} 삭제 실패`, err);
  }
}
