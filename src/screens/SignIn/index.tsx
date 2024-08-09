import React from 'react';
import { Moon, Sun } from 'phosphor-react-native';
import { Controller, useForm } from 'react-hook-form';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/useAuth';

import { useTheme } from '../../context/ThemeContext';

import { formSignIn } from '../../dto/formSignInDTO';

import {
  ContainerForm,
  ContainerIcon,
  IconButton,
  SubTitle,
  Title,
} from './styles';

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
  console.log(theme.colors.application_background);
  return (
    <>
      <ContainerForm>
        <Title>Emulator</Title>
        <SubTitle>E-commerce</SubTitle>

        <ContainerIcon>
          <IconButton onPress={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? (
              <Moon size={32} color={theme.colors.text_color} weight="fill" />
            ) : (
              <Sun size={32} color={theme.colors.text_color} weight="fill" />
            )}
          </IconButton>
        </ContainerIcon>

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
