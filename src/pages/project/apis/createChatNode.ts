import { api } from "./axios";
import axios from "axios";

export async function createChatNode(projectId: string) {
  try {
    const res = await api.post(`/node/${projectId}/start/chat`);
    console.log("chat 노드 생성")
    return res.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.log("서버 응답 데이터:", e.response?.data);
    }
    console.error("노드 생성 실패:", e);
  }
}
