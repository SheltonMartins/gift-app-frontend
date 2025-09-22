// src/components/Footer.tsx
import React from 'react';
import { FooterContainer, FooterText } from '../styles/Footer.Style';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
        Designed by Shelton <span>™</span>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
