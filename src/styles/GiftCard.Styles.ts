import styled from 'styled-components';

/* === Layout geral do card === */
export const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/* === Título e descrição === */
export const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Description = styled.p`
  margin: 0;
  color: #444;
  font-size: 0.95rem;
`;

/* === Imagem e links === */
export const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ProductLink = styled.a`
  color: #0077ff;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

/* === Botão de deletar === */
export const DeleteButton = styled.button`
  background: #ff4d4f;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: #d9363e;
  }
`;

/* === Container de comentários === */
export const CommentsContainer = styled.div`
  margin-top: 10px;
  border-top: 1px solid #ddd;
  padding-top: 10px;
  background: #fafafa;
  border-radius: 8px;
`;

export const CommentItem = styled.p`
  padding: 6px 8px;
  margin: 4px 0;
  background: #f2f2f2;
  border-radius: 6px;
  font-size: 0.9rem;
`;

/* === Caixa para adicionar novo comentário === */
export const AddCommentBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 10px;
`;

export const AddCommentInput = styled.input`
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 100%;
`;

export const AddCommentButton = styled.button`
  background: #333;
  color: white;
  padding: 6px 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #111;
  }

  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;
