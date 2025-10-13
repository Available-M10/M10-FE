import { api } from "./axios";

export async function createLLM(
  projectId: string,
  llm: string,
  prompt: string,
  message: string
) {
  const body = { llm, prompt, message };
  const url = `/node/${projectId}/llm`;

  try {
    const res = await api.post(url, body);
    return res.data;
  } catch (e) {
    console.log(e);
    return { answer: "LLM 호출 실패" };
  }
}
