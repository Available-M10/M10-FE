import { api } from "./axios";

export async function createChatTrigger(
  projectId: string,
  startPortId: string,
  message: string
) {
  console.log("뭔데 대체", projectId, startPortId, message);
  const chatTriggerUrl = `/trigger/${projectId}/chat`;
  const url = startPortId
    ? `${chatTriggerUrl}?startPortId=${startPortId}`
    : `${chatTriggerUrl}`;

  const body: Record<string, any> = {};
  if (message) body.message = message;

  try {
    console.log("body2", projectId, startPortId, message);
    const res = await api.post(url, body);
    return res.data;
  } catch (e) {
    console.log(e);
    console.log("body", projectId, startPortId, message);
  }
}
