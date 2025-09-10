import { createContext, useContext, useState, ReactNode } from "react";
import type { Node, Edge } from "@xyflow/react";

type ProjectContextType = {
  nodes: Node[];
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
};

const FLowContext = createContext<ProjectContextType | undefined>(undefined);

export function FlowProvider({ children }: { children: ReactNode }) {
  const [nodes, setNodes] = useState<Node[]>(() => {
    const saved = localStorage.getItem("nodes");
    return saved ? JSON.parse(saved) : [];
  });

  const [edges, setEdges] = useState<Edge[]>(() => {
    const saved = localStorage.getItem("edges");
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <FLowContext.Provider value={{ nodes, setNodes, edges, setEdges }}>
      {children}
    </FLowContext.Provider>
  );
}

export const useFlow = () => {
  const context = useContext(FLowContext);
  if (!context)
    throw new Error("useProject must be used within ProjectProvider");
  return context;
};
