import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonComponent, Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
};

const Button = ({ title, ...rest }: Props) => {
  return (
    <Container>
      <ButtonComponent {...rest}>
        <Title>{title}</Title>
      </ButtonComponent>
    </Container>
  );
};

export default Button;
