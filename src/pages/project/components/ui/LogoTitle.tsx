import Logo from "@/assets/icon-logo.svg"

export function LogoTitle() {
  return (
    <div className="h-full flex items-center gap-x-3">
      <img src={Logo} className="w-[10%]" />
      <div className="font-black text-xl text-[#FF6D5A]">M10</div>
      <div>프로젝트 이름</div>
    </div>
  );
}
