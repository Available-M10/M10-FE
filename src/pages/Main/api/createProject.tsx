import axios from "axios";

export const createProject = async (name: string) => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    console.error("로그인 필요 - 토큰 없음");
    throw new Error("로그인이 필요합니다.");
  }

  try {
    const response = await axios.post(
      `/projects`,
      { name },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error("프로젝트 생성 실패", error.response?.data || error);
    throw error;
  }
};
