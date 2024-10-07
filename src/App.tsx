// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Books } from "./pages/Books/Books";
import { Authors } from "./pages/Authors/Authors";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";

const NavBar = styled.nav`
  background-color: #f8f9fa;
  padding: 10px;
  margin-bottom: 20px;
`;

const NavLink = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <GlobalStyles />
        <NavBar>
          <NavLink to="/books">Livros</NavLink>
          <NavLink to="/authors">Autores</NavLink>
        </NavBar>
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
