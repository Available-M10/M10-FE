import { ReactNode } from "react";
import { ProjectProvider } from "./ProjectContext";
import { FlowProvider } from "./FlowContext";

export function Wrapper({ children }: { children: ReactNode }) {
  return (
    <ProjectProvider>
      <FlowProvider>{children}</FlowProvider>
    </ProjectProvider>
  );
}
