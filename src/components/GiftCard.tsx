import React, { useState, useEffect } from 'react';
import api from '../services/api';
import {
  Card,
  Title,
  Description,
  Image,
  ProductLink,
  AddCommentBox,
  AddCommentInput,
  AddCommentButton,
  CommentsContainer,
  CommentItem
} from '../styles/GiftCard.Styles';
import { Comment } from '../interfaces/CommentInterface';
import { Gift } from '../interfaces/GiftInteface';

const GiftCard: React.FC<Gift> = ({
  id,
  title,
  description,
  image_url,
  product_link,
  onDelete,
  user_id,
  comments = []
}) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [commentList, setCommentList] = useState<Comment[]>(comments);

  // ⚡ Sincroniza o estado interno com os comentários recebidos da prop
  useEffect(() => {
    setCommentList(comments);
  }, [comments]);

  const user = localStorage.getItem('user');
  const loggedUserId = user ? JSON.parse(user).id : null;
  const isOwner = loggedUserId === user_id;

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    {alert('deu')}
    if (!newComment.trim()) return;

    try {
      const token = localStorage.getItem('token');
      const res = await api.post(
        `/comments`,
        { gift_id: id, comment: newComment },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const user = localStorage.getItem('user');
      const userName = user ? JSON.parse(user).name : 'Usuário';

      setCommentList(prev => [
        ...prev,
        {
          id: res.data.id,
          text: newComment,
          userName,
          createdAt: new Date().toISOString()
        }
      ]);

      setNewComment('');
    } catch (err) {
      console.error('Erro ao adicionar comentário', err);
    }
  };

  return (
    <Card>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {image_url && <Image src={image_url} alt={title} />}
      {product_link && (
        <p>
          <ProductLink href={product_link} target="_blank" rel="noreferrer">
            Ver presente no site
          </ProductLink>
        </p>
      )}

      <ProductLink
        style={{ cursor: 'pointer', marginTop: '8px' }}
        onClick={() => setShowComments(prev => !prev)}
      >
        {showComments
          ? 'Esconder comentários'
          : `Ver comentários (${commentList.length})`}
      </ProductLink>

      {showComments && (
        <CommentsContainer>
          {commentList.map(c => (
            <CommentItem key={c.id}>
              <b>{c.userName || 'Anônimo'}:</b> {c.text}
            </CommentItem>
          ))}

          <AddCommentBox onSubmit={handleAddComment}>
            <AddCommentInput
              placeholder="Comentar"
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
            />
            <AddCommentButton type="submit">Adicionar</AddCommentButton>
          </AddCommentBox>
        </CommentsContainer>
      )}

      {isOwner && onDelete && <AddCommentButton onClick={onDelete}>Apagar</AddCommentButton>}
    </Card>
  );
};

export default GiftCard;
