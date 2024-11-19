import { lazy } from "react";

import React from "react";

import { RouteObject } from "react-router-dom";

import Loadable from "../components/third-patry/Loadable";

const MainPages = Loadable(lazy(() => import("../pages/authentication/Login/login")));

const Registerages = Loadable(
  lazy(() => import("../pages/authentication/Register"))
);

const MainRoutes = (): RouteObject => {
  return {
    path: "/",

    children: [
      {
        path: "/",

        element: <MainPages />,
      },

      {
        path: "/signup",

        element: <Registerages />,
      },

      {
        path: "*",

        element: <MainPages />,
      },
    ],
  };
};

export default MainRoutes;
