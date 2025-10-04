// src/styles/Register.Style.ts
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background-color: #ADD8E6;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  color: #333;
`;

export const ErrorMessage = styled.p`
  color: #ff4d4f;
  margin-bottom: 15px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: border 0.2s;
  width: 100%;

  &:focus {
    border-color: #4a90e2;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #357ab8;
  }

  &:active {
    background-color: #2d5e91;
  }
`;

// Wrapper para o nickname com @
export const NicknameWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;

  &:focus-within {
    border-color: #4a90e2;
  }
`;

export const AtSymbol = styled.span`
  background-color: #f0f0f0;
  padding: 0 12px;
  font-weight: bold;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
`;
