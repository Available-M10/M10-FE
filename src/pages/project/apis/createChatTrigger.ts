import { api } from "./axios";

export async function createChatTrigger(
  projectId: string,
  startPortId: string,
  message: string
) {
  const chatTriggerUrl = `/trigger/${projectId}/chat`;
  const url = startPortId
    ? `${chatTriggerUrl}?startPortId=${startPortId}`
    : `${chatTriggerUrl}`;

  const body = {
    message: message,
  };

  try {
    const res = await api.post(url, body);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
