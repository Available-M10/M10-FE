import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useParams } from "react-router-dom";

interface ProjectContextType {
  projectId: string;
  nodeData: any[];
  setNodeData: React.Dispatch<React.SetStateAction<any[]>>;
  portInfo: any[];
  setPortInfo: React.Dispatch<React.SetStateAction<any[]>>;
}

const ProjectContext = createContext<ProjectContextType | null>(null);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const { projectId } = useParams<{ projectId: string }>();
  const [nodeData, setNodeData] = useState<any[]>([]);
  const [portInfo, setPortInfo] = useState<any[]>([]);

  console.log("projectId", portInfo);

  useEffect(() => {
    const newPortInfo = nodeData.map((node) => ({
      name: node.name,
      type: node.type,
      nodeId: node.port?.[0]?.id,
      outPortId: node.port[0].out_port_id,
      inPortId: node.port[0].in_port_id,
    }));

    console.log("✅ portInfo 갱신됨:", newPortInfo);
    setPortInfo(newPortInfo);
  }, [nodeData]);

  useEffect(() => {
    console.log("🔥 nodeData 변경됨:", nodeData);
  }, [nodeData]);

  const value = {
    projectId,
    nodeData,
    setNodeData,
    portInfo,
    setPortInfo,
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
