import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";
import App from "./ui/App.jsx";
import Welcome from "./ui/Welcome.jsx";
import Menu from "./ui/Menu.jsx";
import Inventory from "./ui/Inventory.jsx";
import AnimalCard from "./ui/sections/AnimalCard.jsx";
import Feeding from "./ui/Feeding.jsx";
import Health from "./ui/Health.jsx";
import Breeding from "./ui/Breeding.jsx";
import Sales from "./ui/Sales.jsx";
import Reports from "./ui/Reports.jsx";
import About from "./ui/About.jsx";
import WebPanel from "./ui/WebPanel.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, children: [
    { index: true, element: <Welcome /> },
    { path: "menu", element: <Menu /> },
    { path: "inventory", element: <Inventory /> },
    { path: "inventory/:id", element: <AnimalCard /> },
    { path: "feeding", element: <Feeding /> },
    { path: "health", element: <Health /> },
    { path: "breeding", element: <Breeding /> },
    { path: "sales", element: <Sales /> },
    { path: "reports", element: <Reports /> },
    { path: "about", element: <About /> },
    { path: "web-panel", element: <WebPanel /> },
  ]},
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
