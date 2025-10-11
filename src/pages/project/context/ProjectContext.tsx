// ProjectContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

type ProjectContextType = {
  side: string;
  setSide: (tab: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [side, setSide] = useState("기본");
  const [activeTab, setActiveTab] = useState("시작")

  return (
    <ProjectContext.Provider value={{ side, setSide, activeTab, setActiveTab }}>
      {children}
    </ProjectContext.Provider>
  );
}

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context)
    throw new Error("useProject must be used within ProjectProvider");
  return context;
};
