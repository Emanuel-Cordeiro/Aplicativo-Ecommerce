import { TouchableOpacity } from 'react-native';
import { css } from 'styled-components';
import styled from 'styled-components/native';

interface ButtonProps {
  backgroundColor: string;
}

export const Container = styled.View`
  padding: 0 20px 0 20px;
  margin-top: 30px;
  height: 52px;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.button_text};
  font-size: ${({ theme }) => theme.font_size.xl}px;
  font-family: ${({ theme }) => theme.font_family.bold};
`;

// eslint-disable-next-line prettier/prettier
export const ButtonComponent = styled(TouchableOpacity) <ButtonProps>`
  width: 100%;
  height: 52px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.button_background};

  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
`;
