import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Projects from "../pages/Projects/Projects";
import Resume from "../pages/Resume/Resume";
import ProjectDetails from "../pages/Projects/ProjectDetails";
import AboutMe from "../pages/AboutMe/AboutMe";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:  <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/projects",
          element: <Projects></Projects>,
        },
        {
          path: "/projects/:id",
          element: <ProjectDetails></ProjectDetails>,
          loader: () => fetch(`/projects.json`),
        },
        {
          path: "/resume",
          element: <Resume></Resume>,
        },
        {
          path: "/about",
          element: <AboutMe></AboutMe>,
        },
      ],
    },
  ]);