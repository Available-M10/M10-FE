import iconNote from "@/assets/icon-note-side.svg";

export function MainSecondLabel() {
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
      <img src={iconNote} className="w-[20%]" />
    </div>
  );
}
