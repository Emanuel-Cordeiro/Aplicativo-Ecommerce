import { TextInput, View } from 'react-native';
import styled, { css } from 'styled-components/native';

interface TextInputComponentProps {
  editable: boolean;
}

interface ContainerProps {
  error: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Container = styled(View) <ContainerProps>`
  height: 40px;
  margin-bottom: 10px;
  margin: 20px;

  ${props =>
    props.error &&
    css`
      height: 60px;
    `}
`;

export const ContainerInput = styled.View`
  height: 40px;
`;

// eslint-disable-next-line prettier/prettier
export const TextInputComponent = styled(TextInput) <TextInputComponentProps>`
  height: 40px;
  border-radius: 5px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.input_background};
  color: ${({ theme }) => theme.colors.text_color};
  font_size: ${({ theme }) => theme.font_size.md}px;

  ${props =>
    !props.editable &&
    css`
      background-color: ${({ theme }) =>
        theme.colors.input_background_disabled};
      color: ${({ theme }) => theme.colors.text_color_disabled};
    `}
`;

export const Label = styled.Text`
  font_size: ${({ theme }) => theme.font_size.lg}px;
  font_family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.text_color};
`;

export const TextError = styled.Text`
  color: ${({ theme }) => theme.colors.text_error_color};
`;
