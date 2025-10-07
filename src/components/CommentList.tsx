import React from 'react';
import Comment from './Comment';
import { CommentListContainer } from '../styles/Comment.Styles';

interface CommentItem {
  id: number;
  userName: string;
  text: string;
  createdAt?: string;
}

interface CommentListProps {
  comments: CommentItem[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <CommentListContainer>
      {comments.map(comment => (
        <Comment
          key={comment.id}
          id={comment.id}
          userName={comment.userName}
          text={comment.text}
          createdAt={comment.createdAt}
        />
      ))}
    </CommentListContainer>
  );
};

export default CommentList;
