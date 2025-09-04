import { Button } from "../ui/button";
import { LogoTitle } from "../ui/LogoTitle";

export function ProjectHead() {
  return (
    <div className="h-[10%] border-b border-gray-250 flex justify-between px-5 text-xs">
      <LogoTitle />
      <div className="w-1/4 h-full flex items-center justify-center gap-x-3">
        <Button label="저장" />
        <Button label="테스트" />
        <Button label="실행" bgColor="bg-[#FF6D5A]" />
        <Button label="setting" />
      </div>
    </div>
  );
}
