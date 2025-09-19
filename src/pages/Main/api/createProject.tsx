import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const createProject = async (name: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/projects`, { name });
    return response.data;
  } catch (error: any) {
    console.error("프로젝트 생성 실패", error.response?.data || error);
    throw error;
  }
};
