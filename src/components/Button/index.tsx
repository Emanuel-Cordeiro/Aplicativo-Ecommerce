import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonComponent, Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  backgroundColor?: string;
};

const Button = ({ title, backgroundColor = '', ...rest }: Props) => {
  return (
    <Container>
      <ButtonComponent backgroundColor={backgroundColor} {...rest}>
        <Title>{title}</Title>
      </ButtonComponent>
    </Container>
  );
};

export default Button;
