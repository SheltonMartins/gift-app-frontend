import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import {
  Container,
  FriendItem,
  FriendName,
  FriendNickname,
  ErrorMessage,
  HeaderRow,
  Title
} from '../styles/FriendsListPage.Styles';
import { StyledButton } from '../styles/FriendsListPage.Styles';

interface Friend {
  id: number;
  name: string;
  nickname?: string;
  profile_picture?: string;
}

const FriendsListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [friends, setFriends] = useState<Friend[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchFriends = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get(`/users/${id}/friends`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFriends(res.data);
    } catch {
      setError('Erro ao carregar lista de amigos');
    }
  };

  useEffect(() => {
    if (id) fetchFriends();
  }, [id]);

  if (error) return <ErrorMessage>{error}</ErrorMessage>;
  if (!friends.length) return <p>Carregando amigos...</p>;

  return (
    <Container>
      <HeaderRow>
        <Title>Amigos</Title>
        <StyledButton onClick={() => {
  const userStorage = localStorage.getItem('user');
  navigate(`/profile/${userStorage ? JSON.parse(userStorage).id : ''}`);
}}>
  Voltar ao meu perfil
</StyledButton>
      </HeaderRow>

      {friends.map(friend => (
        <FriendItem key={friend.id} onClick={() => navigate(`/friend/${friend.id}`)}>
          <FriendName>{friend.name}</FriendName>
          {friend.nickname && <FriendNickname>@{friend.nickname}</FriendNickname>}
        </FriendItem>
      ))}
    </Container>
  );
};

export default FriendsListPage;
