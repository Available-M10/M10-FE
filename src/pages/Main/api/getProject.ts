import axiosInstance from "@/pages/Auth/axiosInstance";

export const getProject = async () => {
  try {
    const response = await axiosInstance.get("/projects");
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
