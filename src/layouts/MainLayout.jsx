import React from "react";
import Header from "./Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
