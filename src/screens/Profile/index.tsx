import React from 'react';
import { Avatar, Container, ContainerAvatar } from './styles';
import { useAuth } from '../../hooks/useAuth';
import Input from '../../components/Input';

const Profile = () => {
  const { user } = useAuth();

  return (
    <Container>
      <ContainerAvatar>
        <Avatar source={{ uri: user.profileImgUrl }} />
      </ContainerAvatar>

      <Input label="Usuário" value={user.username} editable={false} />
      <Input label="E-mail" value={user.email} />
      <Input label="Nome" value={user.firstName + ' ' + user.lastName} />
    </Container>
  );
};

export default Profile;
