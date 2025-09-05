import setting from "@/assets/icon-setting.svg";
import chat from "@/assets/icon-chat.svg";
import note from "@/assets/icon-note-project.svg";

type ButtonProps = {
  label: string;
  bgColor?: string;
  fontColor?: string;
};

const icons: Record<string, string> = {
  "icon-chat": chat,
  "icon-note-project": note,
  setting: setting,
};

export function Button({
  label,
  bgColor = "bg-white",
  fontColor = "black",
}: ButtonProps) {
  const buttonClass = "w-1/3 h-2/3 rounded-lg border border-[#DDDDDD]";

  if (icons[label]) {
    return (
      <div className={`${buttonClass} ${bgColor} ${fontColor}`}>
        <button className={`w-full h-full flex items-center justify-center`}>
          <img src={icons[label]} className="w-1/3" />
        </button>
      </div>
    );
  }

  return (
    <div className={`${buttonClass}`}>
      <button className={`${bgColor} ${fontColor} w-full h-full rounded-lg`}>
        {label}
      </button>
    </div>
  );
}
