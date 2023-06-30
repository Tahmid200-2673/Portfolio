import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Projects from "../pages/Projects/Projects";
import Resume from "../pages/Resume/Resume";

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
          path: "/resume",
          element: <Resume></Resume>,
        },
      ],
    },
  ]);