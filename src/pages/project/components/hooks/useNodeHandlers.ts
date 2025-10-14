import { createChatNode } from "../../apis/createChatNode";
import { createLLMNode } from "../../apis/createLLMNode";
import { createNoteNode } from "../../apis/createNoteNode";
import { getPresignedUrl, uploadPdfToS3 } from "../../apis/files";

type NodeHandlersProps = {
  getNodePort: (
    type: string
  ) => { nodeId: string; outPortId: string } | undefined;
  setNodePort: (type: string, nodeId: string, outPortId: string) => void;
  prompt: string;
  projectId: string;
};

export const NodeHandlers = ({
  getNodePort,
  setNodePort,
  prompt,
  projectId,
}: NodeHandlersProps) => {
  const handleCreateChatNode = async () => {
    try {
      const node = await createChatNode(projectId);
      console.log("Chat 노드 생성", node);

      const nodeId = node.data?.node_id;
      const outPortId = node.data?.ports?.[0]?.out_port_id;

      if (nodeId && outPortId) setNodePort("CHAT", nodeId, outPortId);
    } catch (e) {
      console.error(e);
    }
  };

  const handleCreateNote = async (
    file: File,
    { projectId }: projectIdProps
  ) => {
    try {
      const { object_key, presigned_url } = await getPresignedUrl(file.name);
      await uploadPdfToS3(presigned_url, file);

      const chatNodeInfo = getNodePort("CHAT");
      const node = await createNoteNode(
        projectId,
        chatNodeInfo?.outPortId,
        object_key
      );

      console.log("Note 노드 생성", node);
      const nodeId = node.data?.node_id;
      const outPortId = node.data?.ports?.[0]?.out_port_id;
      if (nodeId && outPortId) setNodePort("NOTE", nodeId, outPortId);
    } catch (e) {
      console.error(e);
    }
  };

  const handleUploadPdf = async (file: File, { projectId }: projectIdProps) => {
    const noteNodeInfo = getNodePort("NOTE");
    if (!noteNodeInfo) return console.log("Note Node 포트 정보가 없습니다.");

    try {
      const { object_key, presigned_url } = await getPresignedUrl(file.name);
      await uploadPdfToS3(presigned_url, file);
      await createNoteNode(projectId, noteNodeInfo.outPortId, object_key);
      console.log("PDF 업로드 완료!");
    } catch (err) {
      console.error("PDF 업로드 실패:", err);
    }
  };

  const handleCreateLLMNode = async ({ projectId }: projectIdProps) => {
    try {
      const chatNodeInfo = getNodePort("CHAT");
      if (!chatNodeInfo) return console.log("Chat 노드 정보가 없습니다.");

      const node = await createLLMNode(
        projectId,
        chatNodeInfo.outPortId,
        chatNodeInfo.nodeId,
        prompt
      );

      console.log("LLM 노드 생성", node);
      const nodeId = node.data?.node_id;
      const outPortId = node.data?.ports?.[0]?.out_port_id;
      if (nodeId && outPortId) setNodePort("LLM", nodeId, outPortId);
    } catch (e) {
      console.error(e);
    }
  };

  const handleNoteClick = async () => {
    console.log("클릭");
    const noteNodeInfo = getNodePort("NOTE");

    if (!noteNodeInfo) {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "application/pdf";
      fileInput.onchange = async (e: any) => {
        const file = e.target.files[0];
        if (file) await handleCreateNote(file, { projectId });
      };
      fileInput.click();
      return;
    }

    console.log("Note 노드 실행:", noteNodeInfo);
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "application/pdf";
    fileInput.onchange = async (e: any) => {
      const file = e.target.files[0];
      if (file) await handleUploadPdf(file, { projectId });
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
