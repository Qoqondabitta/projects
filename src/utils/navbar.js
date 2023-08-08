import Login from "../route/components/login";
import Home from "../route/components/home";
import Contacts from "../route/components/Contacts";
import Service from "../route/components/service";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    id: 2,
    title: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    element: <Contacts />,
  },
  {
    id: 4,
    title: "Service",
    path: "/service",
    element: <Service />,
  },
];
