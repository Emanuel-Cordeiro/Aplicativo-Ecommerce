import React from 'react';
import { Moon, Sun } from 'phosphor-react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useTheme } from '../../context/ThemeContext';

import { ContainerForm, ContainerIcon, IconButton } from './styles';

const SignIn = () => {
  const { isDarkMode, setIsDarkMode, theme } = useTheme();

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

        <Input label={'Usuário'} />
        <Input label={'Senha'} />

        <Button title={'Entrar'} />
      </ContainerForm>
    </>
  );
};

export default SignIn;
