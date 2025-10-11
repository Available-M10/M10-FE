import { Handle, Position } from "@xyflow/react";

export function CustomNode({ data }) {
  const HandleStyle = { backgroundColor: "#E1E5E9" };
  const { nodeConfig } = data;

  return (
    <div
      style={{
        width: "100%",
        height: 50,
      }}
    >
      {nodeConfig.label}
      {(data.handlePosition === "Right" || data.handlePosition != "Left") && (
        <Handle
          type="source"
          position={Position.Right}
          id="right"
          style={HandleStyle}
        />
      )}
      {(data.handlePosition === "Left" || data.handlePosition != "Right") && (
        <Handle
          type="target"
          position={Position.Left}
          id="right-target"
          style={HandleStyle}
        />
      )}
    </div>
  );
}
