import { createChatNode } from "../../apis/createChatNode";
import { createLLMNode } from "../../apis/createLLMNode";
import { createNoteNode } from "../../apis/createNoteNode";
import { getPresignedUrl, uploadPdfToS3 } from "../../apis/files";
import { useProjectId } from "@/context/hooks/projectId";
import { useLLM } from "../../context/LLMContext";
import { useNodeStore } from "../../store/useNodeStore";

export const NodeHandlers = () => {
  const { projectId, nodeData, portInfo = [], setPortInfo } = useProjectId();
  const { chatNode, prompt, setLLMData } = useLLM();

  const { addNode } = useNodeStore();

  console.log(projectId, prompt, chatNode, "projectId");

  const noteNodeInfo = portInfo.find((n) => n.type === "NOTE");

  console.log("nodeData:", nodeData);
  console.log("portInfo:", portInfo);

  const handleCreateChatNode = async () => {
    try {
      const node = await createChatNode(projectId);
      console.log("Chat 노드 생성", node);
      const newPort = {
        name: node.name,
        type: node.type,
        nodeId: node.node_id,
        outPortId: node.my_port_id,
        inPortId: null,
      };

      setPortInfo((prev) => [...prev, newPort]);
      addNode(newPort);
      console.log(addNode, "addNode");
    } catch (e) {
      console.error(e);
    }
  };

  const handleCreateNote = async (file: File) => {
    if (!portInfo || !Array.isArray(portInfo)) {
      console.log("⚠️ portInfo가 존재하지 않음");
      return;
    }

    const chatNodeInfo = portInfo.find((n) => n.type.toUpperCase() === "START");
    try {
      console.log("note 생성 시도", chatNodeInfo);
      if (!chatNodeInfo) {
        console.log("⚠️ 먼저 Chat 노드를 생성해야 합니다.");
        alert("먼저 Chat 노드를 생성해야 합니다.");
        return;
      }
      const { object_key, presigned_url } = await getPresignedUrl(file.name);
      await uploadPdfToS3(presigned_url, file);

      const node = await createNoteNode(
        projectId,
        chatNodeInfo?.outPortId,
        object_key
      );

      console.log("Note 노드 생성", node);

      if (!node) {
        console.error("note 노드 생성 실패");
        return;
      }

      setPortInfo((prev) => [
        ...prev,
        {
          name: node.name,
          type: node.type,
          nodeId: node.node_id,
          outPortId: node.my_port_id,
          inPortId: chatNodeInfo.outPortId,
        },
      ]);
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
    if (!portInfo || !Array.isArray(portInfo)) {
      console.log("⚠️ portInfo가 존재하지 않음");
      return;
    }

    const chatNodeValue = "GEMINI";
    const promptValue = "너는 정의로운 AI야";

    console.log("LLM 선택됨", chatNodeValue, promptValue);
    setLLMData(chatNodeValue, promptValue);
    if (!chatNodeValue || !promptValue) {
      console.log("chatNode 또는 prompt 값이 비어있습니다.");
      return;
    }

    const chatNodeInfo = portInfo.find((n) => n.type.toUpperCase() === "START");
    try {
      console.log(
        "LLM 생성 시도:",
        projectId,
        promptValue,
        chatNodeValue,
        chatNodeInfo
      );
      if (!chatNodeInfo) {
        console.log("⚠️ 먼저 Chat 노드를 생성해야 합니다.");
        alert("먼저 Chat 노드를 생성해야 합니다.");
        return;
      }

      const node = await createLLMNode(
        projectId,
        chatNodeInfo?.outPortId,
        chatNodeValue,
        promptValue
      );

      console.log("LLM 노드 생성", node);

      if (!node) {
        console.error("LLM 노드 생성 실패");
        return;
      }

      setPortInfo((prev) => [
        ...prev,
        {
          name: node.name,
          type: node.type,
          nodeId: node.node_id,
          outPortId: node.my_port_id,
          inPortId: chatNodeInfo.outPortId,
        },
      ]);
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
