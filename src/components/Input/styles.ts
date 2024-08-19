import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 60px;
  margin-bottom: 10px;
  margin: 20px;
`;

export const ContainerInput = styled.View`
  height: 40px;
`;

export const TextInputComponent = styled(TextInput)`
  height: 40px;
  border-radius: 5px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.input_background};
  color: ${({ theme }) => theme.colors.text_color};
  font_size: ${({ theme }) => theme.font_size.md}px;
`;

export const Label = styled.Text`
  font_size: ${({ theme }) => theme.font_size.lg}px;
  font_family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.text_color};
`;

export const TextError = styled.Text`
  color: ${({ theme }) => theme.colors.text_error_color};
`;
