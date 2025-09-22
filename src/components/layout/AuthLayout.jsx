//UTILITIES
import React from "react";
import clsx from "clsx";
//COMPONENT
import Footer from "./Footer";
import Navbar from "./Navbar";

const AuthLayout = ({ children, isPublic }) => {
  return (
    <>
      <Navbar />
      <main
        className={clsx("flex-1 bg-background", {
          "!bg-white": isPublic,
        })}
      >
        <div className={"w-[90%] max-w-xxl mx-auto py-8"}>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default AuthLayout;
