import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
