import Loadable from "Components/Loaders/Loadable";
import MainLayout from "Layout/MainLayout";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const LandingPage = Loadable(lazy(() => import("Views/LandingPage")));
const SearchResults = Loadable(lazy(() => import("Views/SearchResults")));

const MainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/search",
        element: <SearchResults />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
];

export default MainRoutes;
