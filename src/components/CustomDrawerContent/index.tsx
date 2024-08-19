/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Moon, SignOut, Sun } from 'phosphor-react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Icon from '../Icon';

import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../context/ThemeContext';

import { ContainerButtons } from './styles';

const CustomDrawerContent = (props: any) => {
  const { signOut } = useAuth();
  const { isDarkMode, setIsDarkMode, theme } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <ContainerButtons style={{ marginBottom: 20, padding: 20 }}>
        <Icon onPress={signOut}>
          <SignOut size={32} color={theme.colors.text_color} weight="bold" />
        </Icon>

        <Icon onPress={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? (
            <Moon size={32} color={theme.colors.text_color} weight="fill" />
          ) : (
            <Sun size={32} color={theme.colors.text_color} weight="fill" />
          )}
        </Icon>
      </ContainerButtons>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;
