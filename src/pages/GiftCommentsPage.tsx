import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import CommentList from '../components/CommentList';
import {
  GiftContainer,
  CommentForm,
  CommentInput,
  AddCommentButton
} from '../styles/Comment.Styles';

interface Gift {
  id: number;
  title: string;
  description?: string;
  image_url?: string;
  product_link?: string;
}

interface Comment {
  id: number;
  userName: string;
  text: string;
  createdAt: string;
}

const GiftCommentsPage: React.FC = () => {
  const { giftId } = useParams<{ giftId: string }>();
  const [gift, setGift] = useState<Gift | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchGift = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get(`/gifts/${giftId}`, { headers: { Authorization: `Bearer ${token}` } });
      setGift(res.data);
    } catch (err) {
      console.error('Erro ao carregar gift', err);
    }
  };

  const fetchComments = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get(`/comments/${giftId}`, { headers: { Authorization: `Bearer ${token}` } });
      setComments(res.data);
    } catch (err) {
      console.error('Erro ao carregar comentários', err);
    }
  };

  useEffect(() => {
    if (giftId) {
      fetchGift();
      fetchComments();
    }
  }, [giftId]);

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      const userName = user ? JSON.parse(user).name : 'Usuário';

      const res = await api.post(
        `/comments`,
        { gift_id: Number(giftId), comment: newComment },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Adiciona comentário instantaneamente na lista
      setComments(prev => [...prev, { id: res.data.id, text: newComment, userName, createdAt: new Date().toISOString() }]);
      setNewComment('');
    } catch (err) {
      console.error('Erro ao adicionar comentário', err);
    } finally {
      setLoading(false);
    }
  };

  if (!gift) return <p>Carregando presente...</p>;

  return (
    <div>
      <GiftContainer>
        <h2>{gift.title}</h2>
        {gift.description && <p>{gift.description}</p>}
        {gift.image_url && <img src={gift.image_url} alt={gift.title} style={{ maxWidth: '100%', borderRadius: '5px' }} />}
        {gift.product_link && <p><a href={gift.product_link} target="_blank" rel="noreferrer">Ver presente no site</a></p>}
      </GiftContainer>

      <CommentList comments={comments} />

      <CommentForm onSubmit={handleAddComment}>
        <CommentInput
          placeholder="Digite seu comentário"
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
        />
        <AddCommentButton type="submit" disabled={loading}>
          {loading ? 'Adicionando...' : 'Adicionar comentário'}
        </AddCommentButton>
      </CommentForm>
    </div>
  );
};

export default GiftCommentsPage;
