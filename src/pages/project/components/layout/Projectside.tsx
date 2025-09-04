import { NodeSide } from "../NodeSide";

export function ProjectSide() {
  return (
    <div className="w-1/4 h-[calc(100%-10%)] bg-white border border-gray-250 absolute  right-0 z-10">
      <div className="w-full h-2/3 p-5 flex flex-col">
        <div>노드 속성</div>
        <div className="w-full h-[80%] flex flex-col justify-between pt-1">
          <NodeSide />
        </div>
      </div>
    </div>
  );
}
