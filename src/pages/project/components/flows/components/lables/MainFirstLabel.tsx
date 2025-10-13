import iconAi from "@/assets/icon-Aiagent.svg";
import { useLLM } from "@/pages/project/context/LLMContext";

export function MainFirstLabel() {
  const { setLLMData } = useLLM();
  const handleLLMModel = () => {
    //이거 모달창? 띄워서 선택하는 그림이 제일 예쁠듯
    setLLMData("GPT", "너는 정의로운 AI야");
    console.log("LLM 선택됨");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "full",
        height: "100%",
        gap: "5%",
        borderRadius: "12px",
      }}
      onClick={handleLLMModel}
    >
      <img src={iconAi} className="w-[15%]" />
      <div className="">Ai Agent</div>
    </div>
  );
}
