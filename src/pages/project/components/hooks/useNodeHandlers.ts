import { createChatNode } from "../../apis/createChatNode";
import { createLLMNode } from "../../apis/createLLMNode";
import { createNoteNode } from "../../apis/createNoteNode";
import { getPresignedUrl, uploadPdfToS3 } from "../../apis/files";
import { useProjectId } from "@/context/hooks/projectId";

type NodeHandlersProps = {
  prompt: string;
};

export const NodeHandlers = ({ prompt }: NodeHandlersProps) => {
  const { projectId, nodeData, portInfo } = useProjectId();

  console.log(projectId, "projectId");

  const chatNodeInfo = portInfo.find((n) => n.type === "CHAT");
  const noteNodeInfo = portInfo.find((n) => n.type === "NOTE");

  console.log("nodeData:", nodeData);
  console.log("portInfo:", portInfo);

  const handleCreateChatNode = async () => {
    try {
      const node = await createChatNode(projectId);
      console.log("Chat 노드 생성", node);
    } catch (e) {
      console.error(e);
    }
  };

  const handleCreateNote = async (file: File) => {
    try {
      const { object_key, presigned_url } = await getPresignedUrl(file.name);
      await uploadPdfToS3(presigned_url, file);

      const node = await createNoteNode(projectId, object_key);

      console.log("Note 노드 생성", node);
    } catch (e) {
      console.error(e);
    }
  };

  const handleUploadPdf = async (file: File) => {
    try {
      const { object_key, presigned_url } = await getPresignedUrl(file.name);
      await uploadPdfToS3(presigned_url, file);
      await createNoteNode(projectId, object_key);
      console.log("PDF 업로드 완료!");
    } catch (err) {
      console.error("PDF 업로드 실패:", err);
    }
  };

  const handleCreateLLMNode = async () => {
    try {
      console.log("LLM 생성 시도:", projectId, prompt);

      const node = await createLLMNode(
        projectId,
        chatNodeInfo?.outPortId,
        prompt
      );

      console.log("LLM 노드 생성", node);
    } catch (e) {
      console.error(e);
    }
  };

  const handleNoteClick = async () => {
    console.log("클릭");

    if (!noteNodeInfo) {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "application/pdf";
      fileInput.onchange = async (e: any) => {
        const file = e.target.files[0];
        if (file) await handleCreateNote(file);
      };
      fileInput.click();
      return;
    }

    console.log("Note 노드 실행:");
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "application/pdf";
    fileInput.onchange = async (e: any) => {
      const file = e.target.files[0];
      if (file) await handleUploadPdf(file);
    };
    fileInput.click();
  };

  return {
    handleCreateChatNode,
    handleCreateNote,
    handleUploadPdf,
    handleCreateLLMNode,
    handleNoteClick,
  };
};
