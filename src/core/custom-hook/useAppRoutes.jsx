import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import AboutUs from "../../pages/about-us/AboutUs";
import ContactUs from "../../pages/ContactUs";
import PageNotFound from "../../components/shared/page-not-found/PageNotFound";
import MainLayout from "../../components/layout/MainLayout";
import Partnership from "../../pages/partnership/Partnership";

export const useAppRoutes = () => {
  const login_type = useSelector((state) => state?.currency?.login_type);

  return useMemo(() => {
    const routes = [
      {
        path: "",
        element: <Partnership />,
        layout: MainLayout,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
        layout: MainLayout,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
        layout: MainLayout,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ];


    return routes;
  }, [login_type]);
};
