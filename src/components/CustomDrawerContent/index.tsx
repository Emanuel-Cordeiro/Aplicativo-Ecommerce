/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Button, SafeAreaView } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../context/ThemeContext';

const CustomDrawerContent = (props: any) => {
  const { signOut } = useAuth();
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{ marginBottom: 20, padding: 20 }}>
        <Button title="Sign Out" onPress={signOut} />
        <Button title="Themes" onPress={() => setIsDarkMode(!isDarkMode)} />
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;
