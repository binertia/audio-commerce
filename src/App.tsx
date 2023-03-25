//import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import { createRoot } from "react-dom/client";

import Navbar from "./navbar";
import MainPage from "./main";
import { GlobalStyles } from "./Global";
import Heroes from "./main/product/default/heroes";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Heroes />
      //route after here //
      <MainPage />
    </>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
