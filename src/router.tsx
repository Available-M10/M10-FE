import { createBrowserRouter } from "react-router-dom";
import { Login } from "@/pages/Auth/Login";
import { Signup } from "@/pages/Auth/Signup";
import { MainPage } from "./pages/Main/MainPage";

export const router = createBrowserRouter([
  {
    path: "/login",
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
]);
