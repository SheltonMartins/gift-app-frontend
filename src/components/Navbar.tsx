import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hamburger, LogoutButton, Nav, NavLinks } from '../styles/Navbar.Styles';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userName = localStorage.getItem('userName');
  const userId = localStorage.getItem('userId');

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <Nav>
      {/* Logo à esquerda */}
      <Link to="/" style={{ color: '#fff', fontWeight: '600', fontSize: '18px' }}>
        GiftApp
      </Link>

      {/* Botão Hamburger à direita */}
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        ☰
      </Hamburger>

      {/* Links do menu */}
      <NavLinks isOpen={isOpen}>
        {userName && userId ? (
          <>
            <Link to={`/profile/${userId}`}>Perfil</Link>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Registrar</Link>
          </>
        )}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
