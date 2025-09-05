import { tabConfig } from "../../constants/tabConfig";

type SideActionsProps = {
  activeTab: string;
};

export function SideActions({ activeTab }: SideActionsProps) {
  const buttonNode = "flex items-center gap-5";
  const iconClass = "w-[7%]";

  const current = tabConfig[activeTab];

  return (
    <>
      <div className={buttonNode}>
        <img src={current.first.icon} className={`${iconClass}`} />
        <div>{current.first.text}</div>
      </div>
      <div className={buttonNode}>
        <img src={current.second.icon} className={`${iconClass}`} />
        <div>{current.second.text}</div>
      </div>
    </>
  );
}
