import { ProjectHead } from "./ProjectHead";
import { ProjectFlow } from "./projectFlow";
import { ProjectSide } from "./projectside";

export function ProjectPage() {
  return (
    <div className="flex flex-col h-screen">
      <ProjectHead />
      <div className="flex flex-1">
        <ProjectFlow />
        <ProjectSide />
      </div>
    </div>
  );
}
