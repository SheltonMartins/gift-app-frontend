import React, { useEffect, useState } from 'react';
import GiftCard from './GiftCard';
import { GiftsContainer } from '../styles/GiftsList.styles';
import api from '../services/api';
import { Gift } from '../interfaces/GiftInteface';

interface GiftsListProps {
  userId: number;
  newGift?: Gift | null;
}

const GiftsList: React.FC<GiftsListProps> = ({ userId, newGift }) => {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchGifts = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get(`/gifts/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const gifts: Gift[] = res.data.map((gift: any) => ({
        ...gift,
        comments: (gift.comments || []).map((c: any) => ({
          id: c.id,
          text: c.text,
          userName: c.userName,
          createdAt: c.createdAt
        }))
        
      }));
      //console.log(gifts)

      setGifts(gifts);
    } catch (err) {
      console.error(err);
      setError('Erro ao carregar presentes');
    }
  };

  useEffect(() => {
    fetchGifts();
  }, [userId]);


  const handleDelete = async (giftId: number) => {
    if (!window.confirm('Excluir este presente?')) return;
    try {
      const token = localStorage.getItem('token');
      await api.delete(`/gifts/${giftId}`, { headers: { Authorization: `Bearer ${token}` } });
      setGifts(prev => prev.filter(g => g.id !== giftId));
    } catch (err) {
      alert('Erro ao apagar presente');
    }
  };

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (gifts.length === 0) return <p>Nenhum presente encontrado</p>;

  return (
    <GiftsContainer>
      {gifts.map(gift => (
        <GiftCard
          key={gift.id}
          id={gift.id}
          title={gift.title}
          description={gift.description}
          image_url={gift.image_url}
          product_link={gift.product_link}
          comments={gift.comments}
          userId={gift.userId}
          onDelete={() => handleDelete(gift.id)}
        />
      ))}
    </GiftsContainer>
  );
};

export default GiftsList;
