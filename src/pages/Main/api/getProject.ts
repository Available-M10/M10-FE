import axios from "axios";

const getAccessToken = () => localStorage.getItem("accessToken") || "";

export const getProject = async () => {
  try {
    const token = getAccessToken();
    const response = await axios.get("/projects", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.map(
      (p: { id: number; name: string; active: boolean }) => ({
        id: p.id,
        name: p.name,
        active: p.active,
      })
    );
  } catch (error: any) {
    console.error("프로젝트 조회 실패", error.response?.data || error);
    throw error;
  }
};
