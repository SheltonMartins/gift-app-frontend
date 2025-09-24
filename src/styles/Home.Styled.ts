// src/styles/Home.Style.ts
import styled from 'styled-components';

// Container principal da página
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
  font-family: 'Arial', sans-serif;
`;

export const BigButton = styled.button`
  background: #6a1b9a;
  color: white;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 2rem;
  transition: background 0.3s ease;

  &:hover {
    background: #4a148c;
  }
`;

export const SmallButton = styled.button`
  background: #eeeeee;
  color: #333;
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 0.8rem;
  transition: background 0.3s ease;

  &:hover {
    background: #ddd;
  }
`;

export const OrText = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #666;
  text-align: center;
`;

export const Toast = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #4caf50;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  opacity: 0.95;
  z-index: 1000;
`;

// Botão de cadastro
export const RegisterButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 2.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #6a1b9a, #ab47bc);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);

  &:hover {
    background: linear-gradient(135deg, #4a148c, #8e24aa);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem 2rem;
  }
`;


// Título principal
export const Title = styled.h1`
  font-size: 3rem;
  color: #4a148c;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

// Subtítulo / explicativo
export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

// Container de cards explicativos
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

// Cada card
export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  width: 280px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0,0,0,0.15);
  }
`;

// Título do card
export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #6a1b9a;
  margin-bottom: 0.5rem;
`;

// Texto do card
export const CardText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;
