import React from "react";
import AboutUs from "../../pages/about-us/AboutUs";
import ContactUs from "../../pages/ContactUs";
import PageNotFound from "../../components/shared/page-not-found/PageNotFound";
import MainLayout from "../../components/layout/MainLayout";
import Partnership from "../../pages/partnership/Partnership";
export const allRoutes = [
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
