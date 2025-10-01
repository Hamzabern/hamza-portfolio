import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./theme/ThemeProvider";

import App from "./App.jsx";
import "./index.css";

// Pages en lazy
const Home = lazy(() => import("./pages/Home.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

const qc = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={qc}>
        <ThemeProvider>
          <BrowserRouter>
            <Suspense >
              <Routes>
                <Route element={<App />}>
                  <Route index element={<Home />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
