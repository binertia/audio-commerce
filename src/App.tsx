//import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { createRoot } from "react-dom/client";

import MainPage from "./Main";

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <MainPage />
    </div>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
