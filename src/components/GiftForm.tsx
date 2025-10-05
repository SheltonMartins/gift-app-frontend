import React, { useState } from 'react';
import api from '../services/api';
import { Button, ErrorMessage, FormContainer, Input, InputGroup } from '../styles/GiftForm.Styles';

interface Props {
  userId: number;
  onGiftAdded?: (newGift: any) => void;
}

const GiftForm: React.FC<Props> = ({ userId, onGiftAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [product_link, setProductLink] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    if (!title) {
      setError('Título é obrigatório');
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await api.post(
        '/gifts',
        { user_id: userId, title, description, image_url, product_link },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // ✅ Depois de criar, busca o último presente cadastrado desse usuário
      const res = await api.get(`/gifts/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const gifts = res.data;
      const newGift = gifts[0]; // geralmente o mais recente vem primeiro

      // Limpa os campos
      setTitle('');
      setDescription('');
      setImageUrl('');
      setProductLink('');
      setSuccess('Presente adicionado com sucesso! 🎁');
      setLoading(false);

      if (onGiftAdded && newGift) onGiftAdded(newGift);

      setTimeout(() => setSuccess(null), 3000);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erro ao adicionar presente');
      setLoading(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {error && <ErrorMessage style={{ color: 'red' }}>{error}</ErrorMessage>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {loading && <p>Adicionando presente...</p>}

      <InputGroup>
        <Input placeholder="Eu quero ganhar um(a)..." value={title} onChange={e => setTitle(e.target.value)} required />
      </InputGroup>

      <InputGroup>
        <Input placeholder="Caracteristicas do presente (cor, tamanho, detalhes)" value={description} onChange={e => setDescription(e.target.value)} />
      </InputGroup>

      <InputGroup>
        <Input placeholder="URL da imagem" value={image_url} onChange={e => setImageUrl(e.target.value)} />
      </InputGroup>

      <InputGroup>
        <Input placeholder="Link do produto (shopee, amazon...)" value={product_link} onChange={e => setProductLink(e.target.value)} />
      </InputGroup>

      <Button type="submit" disabled={loading}>
        {loading ? 'Adicionando...' : 'Adicionar'}
      </Button>
    </FormContainer>
  );
};

export default GiftForm;
