import { ProjectHead } from "./components/layout/ProjectHead";
import { ProjectFlow } from "./components/flows/ProjectFlow";
import { ProjectSide } from "./components/layout/Projectside";

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
