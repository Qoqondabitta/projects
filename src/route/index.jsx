import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import Contact from "./components/contact";
import Logo from "./components/logo";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

const ROuterFive = () => {
  const location = useLocation()
  console.log(location);
  return (
    <div>
        <Switch>
          <Route exact path={"/"}>
            <Redirect to={"/contact"} />
          </Route>

          <Route path={"/about"} component={Navbar} />

          <Route path={"/logo"} component={Navbar} />

          <Route path={"/contact"} component={Navbar} />
        </Switch>
        <Switch>
          <Route exact path={"/"} component={Footer} />

          <Route path={"/about"} component={Header} />

          <Route path={"/logo"} component={Logo} />

          <Route path={"/contact"} component={Contact} />

          <Route path={"*"}>
            <h2>404</h2>
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
      <h1>We are here: {location.pathname}</h1>
    </div>
  );
};

export default ROuterFive;
