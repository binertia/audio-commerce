//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import Navbar from "./navbar";
import MainPage from "./main";
import { GlobalStyles } from "./Global";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  fetch("/data/data.json").then((data) => console.log(data.json()));
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Navbar />
      <MainPage />
    </QueryClientProvider>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
