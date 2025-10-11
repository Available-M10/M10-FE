import iconChat from "@/assets/icon-chat-side.svg";

export function StartSecondLabel() {
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
      <img src={iconChat} className="w-[20%]" />
    </div>
  );
}
