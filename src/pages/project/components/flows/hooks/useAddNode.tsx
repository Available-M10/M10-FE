import { useFlow } from "@/pages/project/context/FlowContext";
import { labelMap } from "../components/lables/LabelMap";

type SideActionsProps = {
  activeTab: string;
};

export function useAddNode({ activeTab }: SideActionsProps) {
  const { setNodes } = useFlow();

  const addNode = (activeType: "first" | "second") => {
    const key = `${activeTab}-${activeType}` as keyof typeof labelMap;
    if (key === "시작-first") {
      console.log("⚠️ 시작-first 노드는 추가하지 않습니다.");
      return;
    }
    const nodeConfig = labelMap[key];

    setNodes((nds) => [
      ...nds,
      {
        id: String(nds.length + 1),
        position: { x: 0, y: 0 },
        type: "custom",
        data: {
          nodeConfig: {
            label: labelMap[key].label,
            labelKey: key,
            style: labelMap[key].style,
          },
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
