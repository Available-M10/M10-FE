import { create } from "zustand";

interface NodePort {
  name: string;
  type: string;
  nodeId: string;
  outPortId: string | null;
  inPortId: string | null;
}

interface NodeState {
  nodes: NodePort[];
  chatNodePort: string | null;
  noteNodePort: string | null;
  setNodes: (nodes: NodePort[]) => void;
  addNode: (node: NodePort) => void;
  setChatNodePort: (port: string) => void;
  setNoteNodePort: (port: string) => void;
}

export const useNodeStore = create<NodeState>((set) => ({
  nodes: [],
  chatNodePort: null,
  noteNodePort: null,
  setNodes: (nodes) => set({ nodes }),
  addNode: (node) =>
    set((state) => ({
      nodes: [...state.nodes, node],
      ...((node.type.toUpperCase() === "CHAT" ||
        node.type.toUpperCase() === "START") && {
        chatNodePort: node.outPortId,
      }),
      ...(node.type.toUpperCase() === "NOTE" && {
        noteNodePort: node.outPortId,
      }),
    })),
  setChatNodePort: (port) => set({ chatNodePort: port }),
  setNoteNodePort: (port) => set({ noteNodePort: port }),
}));
