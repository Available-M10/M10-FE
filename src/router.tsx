import { createBrowserRouter } from "react-router-dom";
import { Login } from "@/pages/Auth/Login";
import { Signup } from "@/pages/Auth/Signup";
import { MainPage } from "./pages/Main/MainPage";
import { ProjectProvider } from "./context/hooks/projectId";
import { ProjectPage } from "./pages/project/ProjectPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: `/project/:projectId`,
    element: (
      <ProjectProvider>
        <ProjectPage />
      </ProjectProvider>
    ),
  },
]);
