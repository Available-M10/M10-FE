type TextButtonProps = {
  label: string;
  bgColor?: string;
  fontColor?: string;
};

export function TextButton({
  label,
  bgColor = "bg-white",
  fontColor = "black",
}: TextButtonProps) {
  return (
    <div className={`w-1/3 h-2/3 rounded-lg border border-[#DDDDDD]`}>
      <button
        className={`${bgColor} ${fontColor} w-full h-full rounded-lg text-base`}
      >
        {label}
      </button>
    </div>
  );
}
