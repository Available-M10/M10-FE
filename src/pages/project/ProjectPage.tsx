import { ProjectHead } from "./components/layout/ProjectHead";
import { ProjectSide } from "./components/layout/Projectside";
import { ProjectFlow } from "./components/flows/ProjectFlow";
import { ProjectProvider } from "./context/ProjectContext";

export function ProjectPage() {
  return (
    <ProjectProvider>
      <div className="flex flex-col h-screen">
        <ProjectHead />
        <div className="flex flex-1">
          <ProjectFlow />
          <ProjectSide />
        </div>
      </div>
    </ProjectProvider>
  );
}
