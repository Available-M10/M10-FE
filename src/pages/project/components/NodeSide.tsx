import { InputField } from "./ui/InputField";

export function NodeSide() {
  return (
    <>
      <InputField label="노드 이름" placeholder="노드 이름을 입력해주세요" />
      <InputField label="설명" placeholder="노드 설명을 입력해주세요" />
      <InputField label="조건" placeholder="실행 조건을 입력해주세요" />
      <InputField
        label="액션"
        placeholder="선택 또는 입력하세요"
        options={["데이터 수집", "바나나", "포도"]}
      />
    </>
  );
}
