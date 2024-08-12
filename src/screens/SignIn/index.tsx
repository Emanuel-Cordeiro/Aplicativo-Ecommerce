import React from 'react';
import { Moon, Sun } from 'phosphor-react-native';
import { Controller, useForm } from 'react-hook-form';

import Icon from '../../components/Icon';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/useAuth';

import { useTheme } from '../../context/ThemeContext';

import { formSignIn } from '../../dto/formSignInDTO';

import { ContainerForm, SubTitle, Title } from './styles';

const SignIn = () => {
  const { signIn } = useAuth();

  const { isDarkMode, setIsDarkMode, theme } = useTheme();

  const { control, handleSubmit, setFocus } = useForm<formSignIn>();

  function handleSignIn(data: formSignIn) {
    signIn(data.user, data.password);
  }

  const handleSetFocus = (fieldName: 'user' | 'password') => {
    setFocus(fieldName);
  };

  return (
    <>
      <ContainerForm>
        <Title>Emulator</Title>
        <SubTitle>E-commerce</SubTitle>

        <Icon onPress={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? (
            <Moon size={32} color={theme.colors.text_color} weight="fill" />
          ) : (
            <Sun size={32} color={theme.colors.text_color} weight="fill" />
          )}
        </Icon>

        <Controller
          name="user"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              label={'Usuário'}
              value={value}
              onChangeText={onChange}
              onSubmitEditing={() => handleSetFocus('password')}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              label={'Senha'}
              value={value}
              onChangeText={onChange}
              secureTextEntry
            />
          )}
        />

        <Button title={'Entrar'} onPress={handleSubmit(handleSignIn)} />
      </ContainerForm>
    </>
  );
};

export default SignIn;
