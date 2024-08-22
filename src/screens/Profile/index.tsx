import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { api } from '../../utils/api';

import { useAuth } from '../../hooks/useAuth';

import { FormSignIn } from '../../dto/formSignInDTO';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Avatar,
  Container,
  ContainerAvatar,
  ContainerButton,
  ContainerButtons,
  Username,
} from './styles';

interface ProfileProps extends FormSignIn {
  passwordConfirm: string;
}

const Profile = () => {
  const { user } = useAuth();
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const {
    control,
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProfileProps>();

  useEffect(() => {
    user.password = '';

    reset(user);
  }, [reset, user]);

  async function handleProfileChanges(body: ProfileProps) {
    const response = await api.patch(`/users/${user.id}`, body);

    const { username, password, firstName, lastName, email } = response.data;

    const updatedProfile = {
      id: user.id,
      username,
      password,
      firstName,
      lastName,
      email,
      profileImgUrl: user.profileImgUrl,
    };

    reset(updatedProfile);

    setIsChangingPassword(!isChangingPassword);
  }

  return (
    <Container>
      <ContainerAvatar>
        <Avatar source={{ uri: user.profileImgUrl }} />
        <Username>{`Olá, ${user.firstName} ${user.lastName}`}</Username>
      </ContainerAvatar>

      <Input label="Usuário" editable={false} value={user.username} />

      <Controller
        name="firstName"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            label="Nome"
            value={value}
            onChangeText={onChange}
            editable={isChangingPassword}
            errorMessage={errors.firstName}
            {...register('firstName', {
              required: 'Nome obrigatório',
            })}
          />
        )}
      />

      <Controller
        name="lastName"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            label="Sobrenome"
            value={value}
            onChangeText={onChange}
            editable={isChangingPassword}
            errorMessage={errors.lastName}
            {...register('lastName', {
              required: 'Sobrenome obrigatório',
            })}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            label="E-mail"
            value={value}
            onChangeText={onChange}
            editable={isChangingPassword}
            errorMessage={errors.email}
            {...register('email', {
              required: 'E-mail obrigatório',
            })}
          />
        )}
      />

      {isChangingPassword ? (
        <>
          <Controller
            name="password"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                label="Nova senha"
                value={value}
                onChangeText={onChange}
                secureTextEntry
                errorMessage={undefined}
              />
            )}
          />

          <Controller
            name="passwordConfirm"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                label="Confirme a nova senha"
                value={value}
                onChangeText={onChange}
                errorMessage={undefined}
              />
            )}
          />

          <ContainerButtons>
            <ContainerButton>
              <Button
                title="Confirmar"
                backgroundColor="#29d000"
                onPress={handleSubmit(handleProfileChanges)}
              />
            </ContainerButton>
            <ContainerButton>
              <Button
                title="Cancelar"
                backgroundColor="red"
                onPress={() => setIsChangingPassword(!isChangingPassword)}
              />
            </ContainerButton>
          </ContainerButtons>
        </>
      ) : (
        <>
          <Button
            title="Alterar perfil"
            onPress={() => setIsChangingPassword(!isChangingPassword)}
          />
        </>
      )}
    </Container>
  );
};

export default Profile;
