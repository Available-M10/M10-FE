import { ProjectHead } from "./components/layout/ProjectHead";
import { ProjectSide } from "./components/layout/ProjectSide";
import { ProjectFlow } from "./components/flows/ProjectFlow";
import { Wrapper } from "./context/Wrapper";

export function ProjectPage() {
  return (
    <Wrapper>
      <div className="flex flex-col h-screen">
        <ProjectHead />
        <div className="flex flex-1">
          <ProjectFlow />
          <ProjectSide />
        </div>
      </div>
    </Wrapper>
  );
}
