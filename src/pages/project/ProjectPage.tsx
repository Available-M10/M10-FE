import { ProjectHead } from "./components/layout/ProjectHead";
import { ProjectSide } from "./components/layout/Projectside";
import { ProjectFlow } from "./components/flows/ProjectFlow";
import { Wrapper } from "./context/Wrapper";
import { useProjectId } from "@/context/hooks/projectId";

export function ProjectPage() {
  const { projectId } = useProjectId();
  return (
    <Wrapper>
      <div className="flex flex-col h-screen">
        <ProjectHead />
        <div className="flex flex-1">
          <ProjectFlow projectId={projectId} />
          <ProjectSide />
        </div>
      </div>
    </Wrapper>
  );
}
