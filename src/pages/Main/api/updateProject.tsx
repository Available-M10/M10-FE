import axios from "axios";

axios.defaults.baseURL = "/";

export const updateProject = async (id: number, name: string) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (!token) throw new Error("토큰이 존재하지 않습니다.");

    const response = await axios.patch(
      `/projects/${id}`,
      { name },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error("프로젝트 수정 실패", {
      status: error.response?.status,
      data: error.response?.data,
      headers: error.response?.headers,
    });
    throw error;
  }
};
