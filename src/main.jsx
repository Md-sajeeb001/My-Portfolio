import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  </StrictMode>
);
