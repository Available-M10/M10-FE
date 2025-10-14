import { ProjectHead } from "./components/layout/ProjectHead";
import { ProjectSide } from "./components/layout/ProjectSide";
import { ProjectFlow } from "./components/flows/ProjectFlow";
import { Wrapper } from "./context/Wrapper";
import type { projectIdProps } from "../../context/hooks/projectId";

export function ProjectPage({ projectId }: projectIdProps) {
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
