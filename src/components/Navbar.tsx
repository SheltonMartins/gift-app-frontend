import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hamburger, LogoutButton, Nav, NavLinks } from '../styles/Navbar.Styles';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<{ id: number; name: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  const handleLinkClick = () => {
    setIsOpen(false); // fecha o menu quando o usuário clica em qualquer link
  };

  return (
    <Nav>
      {/* Logo à esquerda */}
      <Link 
        to="/" 
        onClick={handleLinkClick} 
        style={{ color: '#fff', fontWeight: '600', fontSize: '18px' }}
      >
        GiftApp
      </Link>

      {/* Botão Hamburger à direita */}
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        ☰
      </Hamburger>

      {/* Links do menu */}
      <NavLinks isOpen={isOpen}>
        {user ? (
          <>
            <Link to={`/profile/${user.id}`} onClick={handleLinkClick}>
              {user.name.split(' ')[0] || 'Perfil'}
            </Link>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </>
        ) : (
          <>
            <Link to="/login" onClick={handleLinkClick}>Login</Link>
            <Link to="/register" onClick={handleLinkClick}>Registrar</Link>
          </>
        )}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
