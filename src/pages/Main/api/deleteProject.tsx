import axios from "axios";

const getAccessToken = () => {
  return localStorage.getItem("accessToken") || "";
};

export const deleteProject = async (id: number) => {
  try {
    const token = getAccessToken();
    const response = await axios.delete(`/projects/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("프로젝트 삭제 실패", error.response?.data || error);
    throw error;
  }
};
