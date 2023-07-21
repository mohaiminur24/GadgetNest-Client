import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const layout = ({ children }: { children: string }) => {
  return (
    <>
      <Header />
      <div className="w-11/12 mx-auto my-5 min-h-[calc(100vh-250px)]">{children}</div>
      <Footer />
    </>
  );
};

export default layout;
