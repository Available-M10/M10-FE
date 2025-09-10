type TextButtonProps = {
  label: string;
  bgColor?: string;
  fontColor?: string;
  onClick?: () => void;
};

export function TextButton({
  label,
  bgColor = "bg-white",
  fontColor = "black",
  onClick,
}: TextButtonProps) {
  return (
    <div
      className={`w-1/3 h-2/3 rounded-lg border border-[#DDDDDD]`}
      onClick={onClick}
    >
      <button
        className={`${bgColor} ${fontColor} w-full h-full rounded-lg text-base`}
      >
        {label}
      </button>
    </div>
  );
}
