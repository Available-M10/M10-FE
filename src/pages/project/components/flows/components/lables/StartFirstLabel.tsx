import iconClick from "@/assets/icon-click.svg";

export function StartFirstLabel() {
  const handleStartLabel = () => {
    console.log("DAas");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
      onClick={handleStartLabel}
    >
      <img src={iconClick} style={{ width: "20%" }} />
    </div>
  );
}
