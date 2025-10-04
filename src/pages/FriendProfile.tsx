import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import GiftsList from '../components/GiftsList';
import {
  Container,
  Header,
  ProfileImage,
  Name,
  Nickname,
  Bio,
  GiftsSection,
  ButtonsContainer,
  Button,
  ErrorMessage
} from '../styles/FriendProfile.Styles';

interface Friend {
  id: number;
  name: string;
  nickname?: string;
  bio?: string;
  profile_picture?: string;
}

const FriendProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [friend, setFriend] = useState<Friend | null>(null);
  const [friendsCount, setFriendsCount] = useState<number>(0);
  const [isMyFriend, setIsMyFriend] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingAdd, setLoadingAdd] = useState<boolean>(false);
  const [loadingRemove, setLoadingRemove] = useState<boolean>(false);

  const fetchFriend = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get(`/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFriend(res.data);
    } catch (err) {
      console.error(err);
      setError('Erro ao carregar perfil do usuário');
    }
  };

  const fetchFriendsCount = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get(`/friends/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (Array.isArray(res.data)) setFriendsCount(res.data.length);
      else if (res.data && res.data.length !== undefined) setFriendsCount(res.data.length);
      else setFriendsCount(0);
    } catch (err) {
      console.log('Erro ao carregar quantidade de amigos', err);
    }
  };

  const checkIfMyFriend = async () => {
    try {
      const token = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');
      if (!storedUser) return;
      const myId = JSON.parse(storedUser).id;

      const res = await api.get(`/friends`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (Array.isArray(res.data)) {
        const exists = res.data.some((f: Friend) => f.id === Number(id));
        setIsMyFriend(exists);
      } else {
        setIsMyFriend(false);
      }
    } catch (err) {
      console.log('Erro ao verificar amizade', err);
    }
  };

  useEffect(() => {
    if (id) {
      fetchFriend();
      fetchFriendsCount();
      checkIfMyFriend();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleRemoveFriend = async () => {
    if (!id) return;
    setLoadingRemove(true);
    try {
      const token = localStorage.getItem('token');
      await api.delete(`/friends/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Amizade removida!');
      setIsMyFriend(false);
      await fetchFriendsCount();
    } catch (err: any) {
      alert(err.response?.data?.error || 'Erro ao remover amizade');
    } finally {
      setLoadingRemove(false);
    }
  };

  const handleAddFriend = async () => {
    if (!friend) return;
    if (!friend.nickname) {
      alert('Não foi possível adicionar: este usuário não possui nickname disponível.');
      return;
    }

    setLoadingAdd(true);
    try {
      const token = localStorage.getItem('token');
      await api.post(
        `/friends`,
        { nickname: friend.nickname },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Amizade adicionada!');
      setIsMyFriend(true);
      await fetchFriendsCount();
    } catch (err: any) {
      console.error(err);
      alert(err.response?.data?.error || 'Erro ao adicionar amizade');
    } finally {
      setLoadingAdd(false);
    }
  };

  if (error) return <ErrorMessage>{error}</ErrorMessage>;
  if (!friend) return <p>Carregando...</p>;

  return (
    <Container>
      <Header>
        {friend.profile_picture && (
          <ProfileImage src={friend.profile_picture} alt={friend.name} />
        )}
        <div>
          <Name>{friend.name}</Name>
          {friend.nickname && <Nickname>@{friend.nickname}</Nickname>}
          {friend.bio && <Bio>{friend.bio}</Bio>}
        </div>
      </Header>

      <ButtonsContainer>
        <Button
          onClick={() => {
            const userStorage = localStorage.getItem('user');
            navigate(`/profile/${userStorage ? JSON.parse(userStorage).id : ''}`);
          }}
        >
          Voltar ao meu perfil
        </Button>

        <Button onClick={() => navigate(`/friends-of/${friend.id}`)}>
          Ver amigos de {friend.name} ({friendsCount})
        </Button>

        {isMyFriend ? (
          <Button danger onClick={handleRemoveFriend} disabled={loadingRemove}>
            {loadingRemove ? 'Removendo...' : 'Remover amizade'}
          </Button>
        ) : (
          <Button
            onClick={handleAddFriend}
            disabled={loadingAdd || !friend.nickname}
            title={!friend.nickname ? 'Usuário não tem nickname' : undefined}
          >
            {loadingAdd ? 'Adicionando...' : 'Adicionar amizade'}
          </Button>
        )}
      </ButtonsContainer>

      <GiftsSection>
        <h3>Lista de Presentes</h3>
        <GiftsList userId={friend.id} />
      </GiftsSection>
    </Container>
  );
};

export default FriendProfile;
