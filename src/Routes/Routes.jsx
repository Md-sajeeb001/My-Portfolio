import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProjectDetails from "../pages/Details/ProjectDetails";
import AboutMe from "../pages/AboutMe/AboutMe";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "/details/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
    ],
  },
]);

export default routes;
