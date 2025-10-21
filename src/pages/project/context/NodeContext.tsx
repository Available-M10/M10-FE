import { createContext, useContext, useState, useRef } from "react";

interface NodePort {
  nodeId: string; // 노드 ID
  type: string;
  outPortId?: string; // out 포트
  inPortId?: string; // in 포트
}

interface NodeContextType {
  nodes: NodePort[];
  setNodes: React.Dispatch<React.SetStateAction<NodePort[]>>;
  setNodePort: (
    nodeId: string,
    type: string,
    outPortId?: string,
    inPortId?: string
  ) => void;
  getNodePort: (nodeId: string) => NodePort | undefined;
}

const NodeContext = createContext<NodeContextType>({
  nodes: [],
  setNodes: () => {},
  setNodePort: () => {},
  getNodePort: () => undefined,
});

export const NodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [nodes, setNodes] = useState<NodePort[]>([]);

  // const nodesRef = useRef<NodePort[]>([]);
  // const setNodePort = (nodeId, type, outPortId?, inPortId?) => {
  //   nodesRef.current = [
  //     ...nodesRef.current.filter((n) => n.nodeId !== nodeId),
  //     { nodeId, type, outPortId, inPortId },
  //   ];
  //   setNodes(nodesRef.current); // 렌더 트리거
  // };

  const setNodePort = (
    nodeId: string,
    type: string,
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
                type,
                outPortId: outPortId ?? n.outPortId,
                inPortId: inPortId ?? n.inPortId,
              }
            : n
        );
      }
      return [...prev, { nodeId, type, outPortId, inPortId }];
    });
  };
  console.log("tlqkf", nodes);

  const getNodePort = (type: string) =>
    nodes.find((n) => n.type.toUpperCase() === type.toUpperCase());

  return (
    <NodeContext.Provider value={{ nodes, setNodes, setNodePort, getNodePort }}>
      {children}
    </NodeContext.Provider>
  );
};

export const useNode = () => useContext(NodeContext);
