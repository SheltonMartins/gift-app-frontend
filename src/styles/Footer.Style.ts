// src/styles/Footer.Style.ts
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background: #4a148c;
  color: #fff;
  padding: 1.5rem 0;
  text-align: center;
  font-family: 'Arial', sans-serif;
  position: relative;
  bottom: 0;
`;

export const FooterText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;

  span {
    color: #ffdd57;
    font-size: 1.1rem;
    margin-left: 0.3rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;

    span {
      font-size: 1rem;
    }
  }
`;

export const FooterHighlight = styled.span`
  color: #ffdd57;
  font-size: 1.1rem;
  font-weight: bold;
`;
