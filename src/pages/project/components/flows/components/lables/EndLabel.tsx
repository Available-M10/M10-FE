import iconEnd from "@/assets/icon-end.svg";

export function EndLabel() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <img src={iconEnd} className="w-[20%]" />
    </div>
  );
}
