import { createContext, useContext, ReactNode } from "react";
import { useParams } from "react-router-dom";

interface ProjectContextType {
  projectId: string | undefined;
}

const ProjectContext = createContext<ProjectContextType | null>(null);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const { projectId } = useParams<{ projectId: string }>();
  const value = {
    projectId,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}

export function useProjectId() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
}
