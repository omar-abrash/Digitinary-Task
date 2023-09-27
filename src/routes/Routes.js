// import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLayOut from "../layout/UserLayOut";
import HomePage from "../pages/HomePage";
import LogInPage from "../pages/LogInPage";
import PostsPage from "../pages/PostsPage";
import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <UserLayOut />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LogInPage />,
      },
      {
        path: "posts",
        element: <PostsPage />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={routes} />;
};

export default Routes;
