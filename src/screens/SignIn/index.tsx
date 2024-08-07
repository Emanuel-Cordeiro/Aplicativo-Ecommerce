import React from 'react';
import { Moon, Sun } from 'phosphor-react-native';
import { Controller, useForm } from 'react-hook-form';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useTheme } from '../../context/ThemeContext';

import { ContainerForm, ContainerIcon, IconButton } from './styles';

type formSignIn = {
  user: string;
  password: string;
};

const SignIn = () => {
  const { isDarkMode, setIsDarkMode, theme } = useTheme();

  const { control, handleSubmit, setFocus } = useForm<formSignIn>();

  function handleSignIn(data: formSignIn) {
    console.log(data);
  }

  const handleSetFocus = (fieldName: 'user' | 'password') => {
    setFocus(fieldName);
  };

  return (
    <>
      <ContainerForm>
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
              value={value}
              onChangeText={onChange}
              label={'Usuário'}
              onSubmitEditing={() => handleSetFocus('password')}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              secureTextEntry
              value={value}
              onChangeText={onChange}
              label={'Senha'}
            />
          )}
        />

        <Button title={'Entrar'} onPress={handleSubmit(handleSignIn)} />
      </ContainerForm>
    </>
  );
};

export default SignIn;
