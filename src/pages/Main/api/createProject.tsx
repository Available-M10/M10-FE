import axios from "axios";

const ACCESS_TOKEN = "";
export const createProject = async (name: string) => {
  try {
    const response = await axios.post(
      `/projects`,
      { name },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error("프로젝트 생성 실패", error.response?.data || error);
    throw error;
  }
};
