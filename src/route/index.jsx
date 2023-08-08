import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/service";
import Header from "./components/Contacts";
import Contact from "./components/home";
import Logo from "./components/login";
import {
  Routes,
  Route,
  // useNavigate,
  useLocation,
  Navigate
} from "react-router-dom";
// import {
//   Routes,
//   Route,
//   Switch,
//   useNavigate,
//   Redirect,
//   useLocation,
// } from "react-router-dom";

const ROuterFive = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          <Route exact path={"/"} element={<Navigate to={"/contact"} />} />
          <Route exact path={"/"} element={<Footer />} />
          <Route path={"/about"} element={<Header />} />
          <Route path={"/logo"} element={<Logo />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route
            path={"*"}
            element={
              <h1>
                404 <br /> Page Not Found
              </h1>
            }
          />
        </Route>
      </Routes>
      <h1>We are here: {location.pathname}</h1>
    </div>
  );
};

export default ROuterFive;
