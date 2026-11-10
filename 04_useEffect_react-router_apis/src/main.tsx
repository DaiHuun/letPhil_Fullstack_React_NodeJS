import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { BrowserRouter, Routes, Route } from "react-router";
import { ActivePage } from "./pages/ActivePage.tsx";
import { CompletedPage } from "./pages/CompletedPage.tsx";
import { TodoProvider } from "./context/TodoContext.tsx";
import { Navbar } from "./components/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodoProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/active-page" element={<ActivePage />} />
          <Route path="/completed-page" element={<CompletedPage />} />
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  </StrictMode>,
);

/**
 * http://localhost:5173/
 *
 * path: how we get to that page ("/")
 * element: this is the component thats being rendered
 *
 *
 */
