import iconAi from "@/assets/icon-Aiagent.svg";

export function MainFirstLabel() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "full",
        height: "100%",
        gap: "5%",
        borderRadius: "12px",
      }}
    >
      <img src={iconAi} className="w-[15%]" />
      <div className="">Ai Agent</div>
    </div>
  );
}
