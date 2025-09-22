import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface User {
  id: number;
  name: string;
  nickname: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    api.get('/users', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setUsers(res.data))
      .catch(() => setError('Erro ao carregar usuários'));
  }, []);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (users.length === 0) return <p>Nenhum usuário encontrado</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id} style={{ marginBottom: '15px' }}>
          <h4>{user.name} ({user.nickname})</h4>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
