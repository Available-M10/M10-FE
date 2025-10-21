import { api } from "./axios";

export async function createLLMNode(
  projectId: string,
  inPortId?: string,
  chatnode?: string,
  prompt?: string
) {
  const LLMUrl = `/node/${projectId}/last/llm`;
  const url = inPortId ? `${LLMUrl}?linkPortId=${inPortId}` : LLMUrl;

  const body: Record<string, any> = {};
  if (chatnode) body.chat_node = chatnode;
  if (prompt) body.prompt = prompt;

  try {
    console.log("이거 아니겠지?", body);
    const res = await api.post(url, body);
    console.log("LLM 노드 생성", body, res.data);
    return res.data;
  } catch (e: any) {
    if (e.response) {
      console.log("서버 응답 오류:", e.response.data);
    } else if (e.request) {
      console.log("요청이 전송되었지만 응답 없음:", e.request);
    } else {
      console.log("요청 구성 오류:", e.message);
    }
  }
}
