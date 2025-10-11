import { createContext, useContext, useState, ReactNode } from "react";
import type { Node, Edge } from "@xyflow/react";
import { labelMap } from "../components/flows/components/lables/LabelMap";

type ProjectContextType = {
  nodes: Node[];
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  messages: { role: string; message: string }[];
  setMessages: React.Dispatch<
    React.SetStateAction<{ role: string; message: string }[]>
  >;
};

const FLowContext = createContext<ProjectContextType | undefined>(undefined);

export function FlowProvider({ children }: { children: ReactNode }) {
  const [nodes, setNodes] = useState<Node[]>(() => {
    const saved = localStorage.getItem("nodes");
    if (!saved) return [];

    const parsed = JSON.parse(saved);

    return parsed.map((node: any) => {
      const key = node.data?.nodeConfig?.labelKey;
      const config = key ? labelMap[key] : undefined;

      return {
        ...node,
        data: {
          ...node.data,
          nodeConfig: {
            labelKey: key,
            label: config ? config.label : null,
            style: config ? config.style : {},
          },
        },
      };
    });
  });

  const [edges, setEdges] = useState<Edge[]>(() => {
    const saved = localStorage.getItem("edges");
    if (!saved) return [];

    const parsed = JSON.parse(saved);

    return parsed.map((node: any) => {
      const key = node.data?.nodeConfig?.labelKey;
      const config = key ? labelMap[key] : undefined;

      return {
        ...node,
        data: {
          ...node.data,
          nodeConfig: {
            labelKey: key,
            label: config ? config.label : null,
            style: config ? config.style : {},
          },
        },
      };
    });
  });

  const [messages, setMessages] = useState<{ role: string; message: string }[]>(
    []
  );

  return (
    <FLowContext.Provider
      value={{ nodes, setNodes, edges, setEdges, messages, setMessages }}
    >
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
