import React from "react";
// import { Navigate } from 'react-router-dom';
import Main from "./views/main";
import B2s from "./views/page01";
import Elimination from "./views/page02";
import Interpolation from "./views/page03";
import Differentiation from "./views/page04";
import Integration from "./views/page05";
import RootFinding from "./views/page06";

const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "commath-pj",
    element: <Main />,
  },
  {
    path: "page01",
    element: <B2s />,
  },
  {
    path: "page02",
    element: <Elimination />,
  },
  {
    path: "page03",
    element: <Interpolation />,
  },
  {
    path: "page04",
    element: <Differentiation />,
  },
  {
    path: "page05",
    element: <Integration />,
  },
  {
    path: "page06",
    element: <RootFinding />,
  },
];

export default routes;
