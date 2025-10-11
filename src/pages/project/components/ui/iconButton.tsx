import chat from "@/assets/icon-chat.svg";
import note from "@/assets/icon-note-project.svg";

type IconButtonProps = {
  iconName: "icon-chat" | "icon-note-project";
  onclick?: () => void;
};

const icons: Record<string, string> = {
  "icon-chat": chat,
  "icon-note-project": note,
};

export function IconButton({ iconName, onclick }: IconButtonProps) {
  return (
    <div className={`w-1/3 h-2/3 rounded-lg border border-[#DDDDDD]`}>
      <button
        className="w-full h-full flex items-center justify-center"
        onClick={onclick}
      >
        <img src={icons[iconName]} className="w-1/3" />
      </button>
    </div>
  );
}
