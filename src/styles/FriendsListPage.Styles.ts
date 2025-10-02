import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 30px auto;
  padding: 25px;
  background-color: #fafafa;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
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
