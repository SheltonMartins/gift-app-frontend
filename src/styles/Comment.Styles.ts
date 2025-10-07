import styled from 'styled-components';

export const GiftContainer = styled.div`
  background-color: #fefefe;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

export const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const CommentContainer = styled.div`
  background-color: #f5f5f5;
  padding: 0.75rem;
  border-radius: 6px;
`;

export const CommentHeader = styled.div`
  font-weight: bold;
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
  color: #333;
`;

export const CommentText = styled.div`
  font-size: 0.9rem;
  color: #555;
`;

export const CommentForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const CommentInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 0.9rem;
`;

export const AddCommentButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;
