import axios from "axios";

axios.defaults.baseURL = "/";

export const updateProject = async (id: number, name: string) => {
  const token = localStorage.getItem("accessToken");
  if (!token) throw new Error("토큰이 존재하지 않습니다.");

  const response = await axios.patch(
    `/projects/${id}/name`,
    { name },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return {
    id: id,
    title: name,
    status: "비활성",
    description: "설명 없음",
  };
};
