import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import {
  Container,
  FriendItem,
  FriendName,
  FriendNickname,
  ButtonsContainer,
  Button,
  ErrorMessage,
  Title
} from '../styles/FriendsOfFriendPage.Styles';

interface Friend {
  id: number;
  name: string;
  nickname?: string;
  profile_picture?: string;
}

const FriendsOfFriendPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [friends, setFriends] = useState<Friend[]>([]);
  const [friendName, setFriendName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const fetchFriendName = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get(`/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFriendName(res.data.name);
    } catch {
      setError('Erro ao carregar informações do usuário');
    }
  };

  const fetchFriends = async () => {
    try {
      const token = localStorage.getItem('token');
        const res = await api.get(`/friends/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
      });
      setFriends(res.data);
    } catch {
      setError('Erro ao carregar lista de amigos');
    }
  };

  useEffect(() => {
    if (id) {
      fetchFriendName();
      fetchFriends();
    }
  }, [id]);

  if (error) return <ErrorMessage>{error}</ErrorMessage>;
  if (!friends.length) return <p>Carregando amigos...</p>;

  return (
    <Container>
      <Title>
        Amigos de {friendName} <h6>({friends.length})</h6>
      </Title>

      {friends.map(friend => (
        <FriendItem key={friend.id} onClick={() => navigate(`/friend/${friend.id}`)}>
          <FriendName>{friend.name}</FriendName>
          {friend.nickname && <FriendNickname>@{friend.nickname}</FriendNickname>}
        </FriendItem>
      ))}

      <ButtonsContainer>
  <Button onClick={() => navigate(`/friend/${id}`)}>
    Retornar ao perfil
  </Button>
</ButtonsContainer>
    </Container>
  );
};

export default FriendsOfFriendPage;
