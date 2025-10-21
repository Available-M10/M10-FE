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
  return apiNodes.map((n, index) => {
    const nodeId = n.port?.[0]?.id ?? `temp-${index}`;

    return {  
      id: String(nodeId),
      type: "custom",
      position: { x: 0, y: 0 },
      data: {
        label: n.name,
        nodeType: n.type,
        ports: n.port,
        node_id: nodeId,
      },
    };
  });
}
