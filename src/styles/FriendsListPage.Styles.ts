import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 30px auto;
  padding: 25px;
  background-color: #fafafa;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;

  &:hover {
    background-color: #005fcc;
  }

  &:active {
    transform: scale(0.97);
  }
`;


export const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

export const FriendItem = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const FriendName = styled.p`
  font-size: 18px;
  color: #333;
  margin: 0;
`;

export const FriendNickname = styled.p`
  font-size: 14px;
  color: #777;
  margin: 2px 0 0 0;
`;

export const ErrorMessage = styled.p`
  color: #ff4d4f;
  font-weight: bold;
  margin-bottom: 15px;
`;
