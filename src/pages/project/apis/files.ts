import { api } from "./axios";

export async function getPresignedUrl(fileName: string) {
  try {
    const res = await api.post(`/files/pre-signed`, {
      file_type: "PDF_FILE",
      file_name: fileName,
    });
    return res.data;
  } catch (err: any) {
    console.error(err.response?.status, err.response?.data);
    throw err;
  }
}

export async function uploadPdfToS3(presignedUrl: string, file: File) {
  try {
    const res = await api.put(presignedUrl, file);
    return res.status === 200;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
