// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Books } from "./pages/Books/Books";
import { Authors } from "./pages/Authors/Authors";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";
import { Navbar } from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <GlobalStyles />
        <Navbar/>
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/" element={<Books />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
