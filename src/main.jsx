import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import HomeLayout from "./Layout/HomeLayout.jsx";
import router from "./Routes/Router.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import BalanceProvider from "./Context/BalanceProvider.jsx";
import  { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BalanceProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster />
    </BalanceProvider>
  </StrictMode>
);
