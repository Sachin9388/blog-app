import React from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Tourism } from "./Components/Tourism";
import { Fitness } from "./Components/Fitness";
import { Technology } from "./Components/Technology";
import { Hollywood } from "./Components/Hollywood";
import { Food } from "./Components/Food";

const app = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/tourism",
        element: <Tourism />,
      },
      {
        path: "/fitness",
        element: <Fitness />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
      {
        path: "/hollywood",
        element: <Hollywood />,
      },
      {
        path: "/food",
        element: <Food />,
      },
    ],
  },
]);
export default app;
