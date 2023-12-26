import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./pages/_layouts/App";
import { AuthLayout } from "./pages/_layouts/Auth";
import { Dashboard } from "./pages/app/Dashboard";
import { Orders } from "./pages/app/Orders";
import { SignIn } from "./pages/auth/SignIn";
import { SignUp } from "./pages/auth/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
  }
]);
