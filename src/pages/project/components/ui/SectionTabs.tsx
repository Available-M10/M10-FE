type SectionTabsProps = {
  label: string;
  onClick?: () => void;
};

export function SectionTabs({ label, onClick }: SectionTabsProps) {
  const buttonButton = "font-semibold text-lg";
  return (
      <button className={`${buttonButton}`} onClick={onClick}>
        {label}
      </button>
  );
}
