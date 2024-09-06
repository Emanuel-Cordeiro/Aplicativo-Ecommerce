import React from 'react';
import {
  Background,
  ContainerHeader,
  ContainerTitle,
  SubtitleHeader,
  TitleHeader,
} from './styles';
import { Logo } from '../Logo';

export function Header() {
  return (
    <Background>
      <ContainerHeader>
        <Logo size={80} />
        <ContainerTitle>
          <TitleHeader>Emulator</TitleHeader>
          <SubtitleHeader> E-commerce Solutions</SubtitleHeader>
        </ContainerTitle>
      </ContainerHeader>
    </Background>
  );
}
