import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #007bff;
  color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

export const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 1rem;
  align-items: center;

  a, button {
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s;
    text-decoration: none;

    &:hover {
      color: #ffeb3b;
    }
  }

  @media (max-width: 600px) {
    position: absolute;
    top: 60px; /* ajusta conforme a altura da navbar */
    left: 0;
    right: 0;
    background-color: #007bff;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    gap: 0.5rem;
  }
`;

export const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #fff;
  cursor: pointer;

  @media (max-width: 600px) {
    display: block;
  }
`;
