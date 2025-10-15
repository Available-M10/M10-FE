import axiosInstance from "@/pages/Auth/axiosInstance";
export const deleteProject = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`/projects/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("프로젝트 삭제 실패", error.response?.data || error);
    throw error;
  }
};
