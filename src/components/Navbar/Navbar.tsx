import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
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
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const NavLink = styled(Link)`
  color: #34495e;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #3498db;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: #3498db;
    &:after {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;

export const Navbar: React.FC = () => {
  return (
    <NavBar>
      <NavContainer>
        <NavTitle to="/">Contato Seguro - Challenge</NavTitle>
        <NavLinkContainer>
          <NavLink to="/books">Livros</NavLink>
          <NavLink to="/authors">Autores</NavLink>
        </NavLinkContainer>
      </NavContainer>
    </NavBar>
  );
};