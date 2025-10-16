import { api } from "./axios";

export async function createNoteNode(
  projectId: string,
  outPortId: string,
  objectKey?: string
) {
  if (!objectKey) throw new Error("objectKey는 필수");

  const noteUrl = `/node/${projectId}/middle/document`;
  const url = outPortId ? `${noteUrl}?linkPortId=${outPortId}` : noteUrl;

  const body = {
    chunk_size: 100,
    embedding_model: "Q",
    vector_db: "A",
    object_key: objectKey,
  };

  try {
    const res = await api.post(url, body);
    return res.data;
  } catch (err: any) {
    console.error(err.response?.status, err.response?.data);
    throw err;
  }
}
