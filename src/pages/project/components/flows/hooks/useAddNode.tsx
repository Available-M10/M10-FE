import { useFlow } from "@/pages/project/context/FlowContext";
import { labelMap } from "../components/lables/LabelMap";

type SideActionsProps = {
  activeTab: string;
};

export function useAddNode({ activeTab }: SideActionsProps) {
  const { setNodes } = useFlow();

  const addNode = (activeType: "first" | "second") => {
    const key = `${activeTab}-${activeType}` as keyof typeof labelMap;
    const nodeConfig = labelMap[key];

    setNodes((nds) => [
      ...nds,
      {
        id: String(nds.length + 1),
        position: { x: 0, y: 0 },
        type: "custom",
        data: {
          nodeConfig,
          handlePosition:
            activeTab === "시작"
              ? "Right"
              : activeTab === "종료"
              ? "Left"
              : "any",
        },
        style: nodeConfig.style,
      },
    ]);
  };

  return { addNode };
}
