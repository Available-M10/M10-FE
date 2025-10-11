import { ReactNode } from "react";
import { ProjectProvider } from "./ProjectContext";
import { FlowProvider } from "./FlowContext";
import { ReactFlowProvider } from "@xyflow/react";
import { LLMProvider } from "./LLMContext";
import { NodeProvider } from "./NodeContext";

export function Wrapper({ children }: { children: ReactNode }) {
  return (
    <ReactFlowProvider>
      <ProjectProvider>
        <LLMProvider>
          <NodeProvider>
            <FlowProvider>{children}</FlowProvider>
          </NodeProvider>
        </LLMProvider>
      </ProjectProvider>
    </ReactFlowProvider>
  );
}
