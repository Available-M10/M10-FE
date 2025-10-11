type ActionButtonProps = {
  icon?: string;
  text: string;
  onClick: () => void;
};

export function ActionButton({ icon, text, onClick }: ActionButtonProps) {
  return (
    <div className="flex items-center gap-5" onClick={onClick}>
      {icon && <img src={icon} className="w-[7%]" />}
      <div>{text}</div>
    </div>
  );
}
