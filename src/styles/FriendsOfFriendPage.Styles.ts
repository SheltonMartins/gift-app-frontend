import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 30px auto;
  padding: 25px;
  background-color: #fafafa;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

export const FriendItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
`;

export const FriendName = styled.span`
  font-weight: bold;
  color: #333;
  font-size: 18px;
`;

export const FriendNickname = styled.span`
  font-size: 14px;
  color: #888;
  margin-top: 2px;
`;

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

export const Button = styled.button<{ danger?: boolean }>`
  padding: 10px 16px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ danger }) => (danger ? '#ff4d4f' : '#4a90e2')};
  color: white;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ danger }) => (danger ? '#d9363e' : '#357ab8')};
  }

  &:active {
    background-color: ${({ danger }) => (danger ? '#b72b2f' : '#2d5e91')};
  }
`;

export const ErrorMessage = styled.p`
  color: #ff4d4f;
  font-weight: bold;
  margin-bottom: 15px;
`;
