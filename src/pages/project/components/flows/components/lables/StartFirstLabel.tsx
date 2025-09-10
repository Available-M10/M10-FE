import iconClick from "@/assets/icon-click.svg";

export function StartFirstLabel() {
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
      <img src={iconClick} style={{ width: "20%" }} />
    </div>
  );
}
