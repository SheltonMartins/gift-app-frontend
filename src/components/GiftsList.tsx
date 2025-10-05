import React, { useEffect, useState } from 'react';
import api from '../services/api';
import GiftCard from './GiftCard';
import { GiftsContainer } from '../styles/GiftsList.styles';

interface Gift {
  id: number;
  user_id: number;
  title: string;
  description?: string;
  image_url?: string;
  product_link?: string;
  created_at?: string;
}

interface GiftsListProps {
  userId: number;
  refreshTrigger?: number; // usado pra forçar reload
  newGift?: Gift | null;   // pra adicionar sem refetch
}

const GiftsList: React.FC<GiftsListProps> = ({ userId, refreshTrigger, newGift }) => {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [error, setError] = useState<string | null>(null);

  const currentUser = localStorage.getItem('user');
  const currentUserId = currentUser ? JSON.parse(currentUser).id : null;

  const fetchGifts = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get(`/gifts/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setGifts(res.data);
    } catch {
      setError('Erro ao carregar presentes');
    }
  };

  useEffect(() => {
    fetchGifts();
  }, [userId, refreshTrigger]);

  // ✅ se um novo presente for passado pelo Form, adiciona à lista sem refetch
  useEffect(() => {
    if (newGift) {
      setGifts(prev => [newGift, ...prev]);
    }
  }, [newGift]);

  const handleDelete = async (giftId: number) => {
    if (!window.confirm('Excluir este presente?')) return;
    try {
      const token = localStorage.getItem('token');
      await api.delete(`/gifts/${giftId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setGifts(prev => prev.filter(g => g.id !== giftId));
    } catch (err: any) {
      alert(err.response?.data?.error || 'Erro ao apagar presente');
    }
  };

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (gifts.length === 0) return <p>Nenhum presente encontrado</p>;

  return (
    <GiftsContainer>
      {gifts.map(gift => (
        <GiftCard
          key={gift.id}
          title={gift.title}
          description={gift.description}
          image_url={gift.image_url}
          product_link={gift.product_link}
          onDelete={
            currentUserId === gift.user_id
              ? () => handleDelete(gift.id)
              : undefined
          }
        />
      ))}
    </GiftsContainer>
  );
};

export default GiftsList;
