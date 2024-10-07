import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BookAuthorProvider } from "./contexts/BookAuthorContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BookAuthorProvider>
      <App />
    </BookAuthorProvider>
  </StrictMode>
);
