export interface FlowNode {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: {
    label: string;
    nodeType: string;
    ports: any[];
  };
}

export function transformApiNodes(apiNodes: any[]): FlowNode[] {
  return apiNodes.map((n, index) => ({
    id: String(index + 1),
    type: "custom",
    position: { x: 0, y: index * 100 }, // 임시 위치
    data: {
      label: n.name,
      nodeType: n.type,
      ports: n.port,
    },
  }));
}
