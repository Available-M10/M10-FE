import { ButtonFlowSide } from "@/components/ui/button.folw.side";

export function ProjectSide() {
  return (
    <div className="w-1/3 h-[calc(100%-4rem)] bg-white border-2 border-gray-250 absolute top-10 right-0 z-10">
      <div className="w-full h-2/3 p-5 bg-red flex flex-col ">
        <div>노드 속성</div>
        <div>노드 이름</div>
        <ButtonFlowSide />
        <div>설명</div>
        <ButtonFlowSide />
        <div>조건</div>
        <ButtonFlowSide />
        <div>액션</div>
        <ButtonFlowSide />
      </div>
    </div>
  );
}
