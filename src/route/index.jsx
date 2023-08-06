import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import Logo from "./components/logo";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

const ROuterFive = () => {
  return (
    <BrowserRouter>
      <Route path={"/about"}>
        <Navbar />
      </Route>

      <Route path={"/logo"}>
        <Footer />
      </Route>

      <Route path={"/contact"}>
        <Header />
      </Route>

    </BrowserRouter>
  );
};

export default ROuterFive;
