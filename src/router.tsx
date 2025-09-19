import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "@/pages/Main/MainPage";

export const router = createBrowserRouter([
  {
    path: "/main",
    element: <MainPage />,
  },
]);
