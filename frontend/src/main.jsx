import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
// import Projects from "./pages/Projects.jsx";
// import ProjectPage from "./pages/ProjectPage.jsx";
// import About from "./pages/About.jsx";
// import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

const qc = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={qc}>
        <BrowserRouter>
          <Routes>
            <Route element={<App />}>
              <Route index element={<Home />} />
              {/* <Route path="projects" element={<Projects />} /> */}
              {/* <Route path="projects/:slug" element={<ProjectPage />} /> */}
              {/* <Route path="about" element={<About />} /> */}
              {/* <Route path="contact" element={<Contact />} /> */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
