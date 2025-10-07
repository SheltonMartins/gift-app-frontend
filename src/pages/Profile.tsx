import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import GiftsList from '../components/GiftsList';
import GiftForm from '../components/GiftForm';
import { Button, Card, Input, ProfileContainer, SectionTitle, UserHeader } from '../styles/Profile.styles';
import { Nickname } from '../styles/FriendProfile.Styles';

interface User {
  id: number;
  name: string;
  nickname: string;
  email: string;
  bio?: string;
  profile_picture?: string;
}

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [friendNickname, setFriendNickname] = useState('');
  const [newGift, setNewGift] = useState<any | null>(null);

  const userId = Number(id || (() => {
    const userStorage = localStorage.getItem('user');
    return userStorage ? JSON.parse(userStorage).id : null;
  })());

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch {
      setError('Erro ao carregar perfil');
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [userId]);

  const handleAddFriend = async () => {
    if (!friendNickname) return;
    try {
      const token = localStorage.getItem('token');
      await api.post(`/friends`, { nickname: friendNickname }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFriendNickname('');
      fetchProfile();
      alert('Nova amizade criada com sucesso!');
    } catch (err: any) {
      alert(err.response?.data.error || 'Erro ao adicionar amigo');
    }
  };

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!user) return <p>Carregando...</p>;

  return (
    <ProfileContainer>
      <Card>
        <UserHeader>
          {user.profile_picture && <img src={user.profile_picture} alt={user.name} />}
          <h2>{user.name}</h2>
          <Nickname>@{user.nickname}</Nickname>
        </UserHeader>
        {user.bio && <p>{user.bio}</p>}
      </Card>

      <Card>
        <SectionTitle>Adicionar desejo de presente</SectionTitle>
        <GiftForm
          userId={user.id}
          onGiftAdded={gift => setNewGift(gift)}
        />
      </Card>

      <Card>
        <SectionTitle>Minha Lista de Presentes</SectionTitle>
        <GiftsList userId={user.id} newGift={newGift} />
      </Card>

      <Card>
        <SectionTitle>Adicionar Amigo Pelo Nickname</SectionTitle>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Input
            placeholder="Digite o nickname do amigo"
            value={friendNickname}
            onChange={e => setFriendNickname(e.target.value)}
          />
          <Button onClick={handleAddFriend}>Adicionar</Button>
        </div>
      </Card>

      <Card>
        <Button
          onClick={() => {
            const userStorage = localStorage.getItem('user');
            navigate(`/friends/${userStorage ? JSON.parse(userStorage).id : ''}`);
          }}
          style={{ width: '100%', marginTop: '0.5rem' }}
        >
          Ver meus amigos
        </Button>
      </Card>
    </ProfileContainer>
  );
};

export default Profile;
