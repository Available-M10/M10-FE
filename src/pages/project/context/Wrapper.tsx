import { ReactNode } from "react";
import { ProjectProvider } from "./ProjectContext";
import { FlowProvider } from "./FlowContext";
import { ReactFlowProvider } from "@xyflow/react";

export function Wrapper({ children }: { children: ReactNode }) {
  return (
    <ReactFlowProvider>
      <ProjectProvider>
        <FlowProvider>{children}</FlowProvider>
      </ProjectProvider>
    </ReactFlowProvider>
  );
}
