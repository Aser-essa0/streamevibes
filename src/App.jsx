import "./styles/index.css";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { createContext, lazy, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const Context = createContext();

const Home = lazy(() => import("./pages/Home"));
const MoviesAndShows = lazy(() => import("./pages/MoviesAndShows"));
const Movie = lazy(() => import("./pages/Movie"));
const Show = lazy(() => import("./pages/Show"));
const Support = lazy(() => import("./pages/Support"));
const Subscriptions = lazy(() => import("./pages/Subscriptions"));

function App() {
  const [width, setWidth] = useState(() => window.innerWidth);
  function handleResize() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60,
        refetchOnMount: false,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Context.Provider value={{ width: width }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/movies&shows" element={<MoviesAndShows />} />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="/show/:id" element={<Show />} />
                <Route path="/support" element={<Support />} />
                <Route path="/supscriptions" element={<Subscriptions />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Context.Provider>
      </QueryClientProvider>
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          success: {
            duration: 1000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            backgroundColor: "#1F1F1F",
            color: "#FFFFFF",
          },
        }}
      />
    </>
  );
}

export { Context };

export default App;
