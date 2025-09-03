import { createBrowserRouter } from "react-router-dom";
import { ProjectPage } from "./pages/project/ProjectPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProjectPage />, //페이지 개발하면 나중에 추가
  },
]);
