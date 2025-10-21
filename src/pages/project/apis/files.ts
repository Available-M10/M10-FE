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
    const res = await fetch(presignedUrl, {
      method: "PUT",
      body: file,
      headers: {
        "Content-Type": file.type,
      },
    });
    console.log("PDF 업로드 완료!");

    return res.status === 200;
  } catch (err: any) {
    console.error("PDF 업로드 실패:", err);
    throw err;
  }
}
