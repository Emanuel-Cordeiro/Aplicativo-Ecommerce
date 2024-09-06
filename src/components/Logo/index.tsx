import React from 'react';
import { LogoContainer } from './styles';
import { useTheme } from '../../context/ThemeContext';
import { ShoppingCart } from 'phosphor-react-native';

interface LogoProps {
  size: number;
}

export function Logo({ size }: LogoProps) {
  const { theme } = useTheme();

  return (
    <LogoContainer>
      <ShoppingCart
        size={size}
        color={theme.colors.text_color}
        weight="duotone"
      />
    </LogoContainer>
  );
}
