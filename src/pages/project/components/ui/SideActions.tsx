import { tabConfig } from "../../constants/tabConfig";
import { useAddNode } from "../flows/hooks/useAddNode";

type SideActionsProps = {
  activeTab: string;
};

export function SideActions({ activeTab }: SideActionsProps) {
  const { addNode } = useAddNode({ activeTab });

  const buttonNode = "flex items-center gap-5";
  const iconClass = "w-[7%]";

  const current = tabConfig[activeTab];

  return (
    <>
      <div
        className={buttonNode}
        onClick={() => {
          addNode("first");
        }}
      >
        <img src={current.first.icon} className={`${iconClass}`} />
        <div>{current.first.text}</div>
      </div>
      <div
        className={buttonNode}
        onClick={() => {
          addNode("second");
        }}
      >
        <img
          src={current.second.icon || undefined}
          className={`${iconClass}`}
        />
        <div>{current.second.text}</div>
      </div>
    </>
  );
}
