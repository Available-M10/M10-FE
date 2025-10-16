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
  return apiNodes.map((n) => ({
    id: String(n.node_id),
    type: "custom",
    position: { x: 0, y: 0 }, // 임시 위치
    data: {
      label: n.name,
      nodeType: n.type,
      ports: n.port,
      node_id: n.node_id,
    },
  }));
}
