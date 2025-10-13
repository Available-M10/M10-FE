import { SectionTabs } from "./ui/SectionTabs";
import { SideActions } from "./ui/SideActions";
import { useProject } from "./../context/ProjectContext";

export function NodeSide() {
  const { activeTab, setActiveTab } = useProject();

  return (
    <div className="w-1/4 h-[calc(100%-10%)] bg-white border border-gray-250 absolute right-0 z-10">
      <div className="flex border-b justify-around items-center w-full p-2">
        <SectionTabs label="시작" onClick={() => setActiveTab("시작")} />
        <SectionTabs label="본론" onClick={() => setActiveTab("본론")} />
      </div>
      <div className="p-[7%] flex flex-col gap-5">
        <SideActions activeTab={activeTab} />
      </div>
    </div>
  );
}
