// src/styles/GiftCard.Styles.ts
import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  }
`;
export const DeleteButton = styled.button`
  background-color: #ff4d4d; /* vermelho elegante */
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  transition: background-color 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: #e63939; /* vermelho mais forte */
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
`;
export const Title = styled.h3`
  margin: 0 0 10px 0;
  font-size: 20px;
  color: #333;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 150px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ProductLink = styled.a`
  color: #4a90e2;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
