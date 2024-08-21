import React from 'react';

import { ContainerIcon, IconButton } from './styles';

type IconProps = {
  onPress: () => void;
  children: any;
};

const Icon = ({ children, onPress }: IconProps) => {
  return (
    <ContainerIcon>
      <IconButton onPress={onPress}>{children}</IconButton>
    </ContainerIcon>
  );
};

export default Icon;
