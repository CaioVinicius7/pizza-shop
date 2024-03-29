import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./pages/_layouts/App";
import { AuthLayout } from "./pages/_layouts/Auth";
import { NotFound } from "./pages/404";
import { Dashboard } from "./pages/app/Dashboard";
import { Orders } from "./pages/app/Orders";
import { SignIn } from "./pages/auth/SignIn";
import { SignUp } from "./pages/auth/SignUp";
import { Error } from "./pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/orders",
        element: <Orders />
      }
    ]
  },
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);
