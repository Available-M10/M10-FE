import { api } from "./axios";

export async function createLLMNode(
  projectId: string,
  inPortId?: string,
  chatnode?: string,
  prompt?: string
) {
  const LLMUrl = `/node/${projectId}/last/llm`;
  const url = inPortId ? `${LLMUrl}?linkPortId=${inPortId}` : LLMUrl;

  const body = {
    chat_node: chatnode,
    prompt: prompt,
  };

  try {
    const res = await api.post(url, body);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
