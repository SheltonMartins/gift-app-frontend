import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #ADD8E6;
  color: #696969;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

export const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 1rem;
  align-items: center;

  a, button {
    color: #696969;
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
    right: 1rem;
    background-color: #D3D3D3;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.7rem 1rem;
    border-radius: 0; /* quina quadrada */
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);

    /* animação de aparição */
    opacity: ${props => (props.isOpen ? 1 : 0)};
    transform: ${props => (props.isOpen ? 'translateY(0)' : 'translateY(-10px)')};
    pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
    transition: opacity 0.3s ease, transform 0.3s ease;

    display: flex;
    gap: 0.5rem;
    width: auto;
    min-width: 120px;
  }
`;
export const LogoutButton = styled.button`
  background: none;
  border: none;
  font-size: 0.95rem;
  font-weight: 600;
  color: #b22222; /* vermelho elegante */
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  width: 100%;
  text-align: left;
  transition: background-color 0.25s ease, color 0.25s ease;

  &:hover {
    background-color: rgba(178, 34, 34, 0.1); /* fundo vermelho claro */
    color: #b22222;
  }
`;

export const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #696969;
  cursor: pointer;

  @media (max-width: 600px) {
    display: block;
  }
`;
