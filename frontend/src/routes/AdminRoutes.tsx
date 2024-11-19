import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "../components/third-patry/Loadable";
import FullLayout from "../Layout/FullLayout";
const MainPages = Loadable(lazy(() => import("../pages/authentication/Login/login")));
const Dashboard = Loadable(lazy(() => import("../pages/dashboard")));
const EditCustomer = Loadable(lazy(() => import("../pages/customer/edit")));
const SellerCenter = Loadable(lazy(() => import("../pages/sellercenter")));
const Products = Loadable(lazy(() => import("../pages/products/create")));
const PromotionsCreate = Loadable(lazy(() => import("../pages/sellercenter/promotions/create")));

const AdminRoutes = (isLoggedIn: boolean): RouteObject => {
  return {
    path: "/",

    element: isLoggedIn ? <FullLayout /> : <MainPages />,

    children: [
      {
        path: "/",

        element: <Dashboard />,
      },

      {
        path: "/sellercenter",

        children: [
          {
            path: "/sellercenter",

            element: <SellerCenter />,
          },

          {
            path: "/sellercenter/products",

            element: <Products />,
          },

          {
            path: "/sellercenter/edit/:id",

            element: <EditCustomer />,
          },

          {
            path: "/sellercenter/promotions/create",

            element: <PromotionsCreate />,
          },
        ],
      },
    ],
  };
};

export default AdminRoutes;
