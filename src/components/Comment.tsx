import React from 'react';
import { CommentContainer, CommentHeader, CommentText } from '../styles/Comment.Styles';

interface CommentProps {
  id: number;
  userName: string;
  text: string;
  createdAt?: string;
}

const Comment: React.FC<CommentProps> = ({ userName, text, createdAt }) => {
  return (
    <CommentContainer>
      <CommentHeader>
        {userName} {createdAt && `· ${new Date(createdAt).toLocaleString()}`}
      </CommentHeader>
      <CommentText>{text}</CommentText>
    </CommentContainer>
  );
};

export default Comment;
