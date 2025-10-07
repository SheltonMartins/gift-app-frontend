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
  position: relative;
`;

/* === Cabeçalho do card (título + botão X) === */
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
`;

/* === Botão vermelho de deletar no topo === */
export const DeleteButton = styled.button`
  background: #ff4d4f;
  color: white;
  border: none;
  font-size: 1.1rem;
  line-height: 1;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover {
    background: #d9363e;
  }
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
  padding: -100px;
  margin: 0px;
  text-decoration: none;
  font-size: 12px;
  font-weight: 50000px;
  &:hover {
    text-decoration: underline;
  }
`;

/* === Comentários === */
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

/* === Caixa de novo comentário (reta, input + botão colados) === */
export const AddCommentBox = styled.form`
  display: flex;
  align-items: stretch;
  margin-top: 10px;
`;

export const AddCommentInput = styled.input`
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 0;
  padding: 8px;
  font-size: 0.9rem;
  border-right: none; /* cola com o botão */
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const AddCommentButton = styled.button`
  background: #007bff;
  color: white;
  border: 1px solid #007bff;
  border-radius: 0;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }

  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;
