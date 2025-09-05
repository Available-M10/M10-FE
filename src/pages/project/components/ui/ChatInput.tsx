import iconUp from "@/assets/icon-arrow_up.svg";

export function ChatInput() {
  return (
    <div className="h-[calc(100%-10%)] relative p-4 flex items-end">
      <input
        type="text"
        placeholder="메세지를 입력하세요"
        className="w-full h-[10%] border rounded border-gray-250 px-3"
      />
      <div className="h-[7%] absolute top-[calc(100%-11%)] left-[calc(100%-18%)] z-10 bg-white px-2 py-1 rounded">
        <div className="h-full bg-[#FF7D68] rounded-full aspect-square flex items-center justify-center ">
          <img src={iconUp} className="h-[60%]" />
        </div>
      </div>
    </div>
  );
}
