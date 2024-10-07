import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
  background-color: #343a40;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavTitle = styled(Link)`
  font-size: 1.5rem;
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const Navbar: React.FC = () => {
  return (
    <NavBar>
      <NavContainer>
        <NavTitle to="/">Admin Dashboard</NavTitle>
        <NavLinkContainer>
          <NavLink to="/books">Livros</NavLink>
          <NavLink to="/authors">Autores</NavLink>
        </NavLinkContainer>
      </NavContainer>
    </NavBar>
  );
};