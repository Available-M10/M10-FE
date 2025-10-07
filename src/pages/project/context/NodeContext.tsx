import { createContext, useContext, useState } from "react";

interface NodePort {
  nodeId: string; // 노드 ID
  outPortId?: string; // out 포트
  inPortId?: string; // in 포트
}

interface NodeContextType {
  nodes: NodePort[];
  setNodePort: (nodeId: string, outPortId?: string, inPortId?: string) => void;
  getNodePort: (nodeId: string) => NodePort | undefined;
}

const NodeContext = createContext<NodeContextType>({
  nodes: [],
  setNodePort: () => {},
  getNodePort: () => undefined,
});

export const NodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [nodes, setNodes] = useState<NodePort[]>([]);

  const setNodePort = (
    nodeId: string,
    outPortId?: string,
    inPortId?: string
  ) => {
    setNodes((prev) => {
      const existing = prev.find((n) => n.nodeId === nodeId);
      if (existing) {
        return prev.map((n) =>
          n.nodeId === nodeId
            ? {
                ...n,
                outPortId: outPortId ?? n.outPortId,
                inPortId: inPortId ?? n.inPortId,
              }
            : n
        );
      }
      return [...prev, { nodeId, outPortId, inPortId }];
    });
  };

  const getNodePort = (nodeId: string) =>
    nodes.find((n) => n.nodeId === nodeId);

  return (
    <NodeContext.Provider value={{ nodes, setNodePort, getNodePort }}>
      {children}
    </NodeContext.Provider>
  );
};

export const useNode = () => useContext(NodeContext);
