import setting from "@/assets/icon-setting.svg";

type ButtonProps = {
  label: string;
  bgColor?: string;
  fontColor?: string;
};

export function Button({
  label,
  bgColor = "bg-white",
  fontColor = "black",
}: ButtonProps) {
  const buttonClass = "w-1/3 h-2/3 rounded-lg border border-[#DDDDDD]";

  return (
    <div className={`${buttonClass}`}>
      {label === "setting" ? (
        <button className={`w-full h-full flex items-center justify-center`}>
          <img src={setting} className="w-1/3 flex" />
        </button>
      ) : (
        <button className={`${bgColor} ${fontColor} w-full h-full rounded-lg`}>
          {label}
        </button>
      )}
    </div>
  );
}

{
  /* <div className={`${buttonClass}`}>
          <button className="w-full h-full">저장</button>
        </div>
        <div className={`${buttonClass}`}>
          <button className="w-full h-full">테스트</button>
        </div>
        <div className={`${buttonClass} bg-[#FF6D5A]`}>
          <button className="w-full h-full text-white">실행</button>
        </div>
        <div className={`${buttonClass}`}>
          <button className={`w-full h-full flex items-center justify-center`}>
            <img src={setting} className="w-1/3 flex" />
          </button>
        </div> */
}
