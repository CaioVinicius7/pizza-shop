import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import { ThemeProvider } from "./components/theme/ThemeProvider";
import { router } from "./Routes";

export function App() {
  return (
    <ThemeProvider storageKey="pizza.shop-theme" defaultTheme="dark">
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />

        <Toaster richColors />

        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  );
}
