import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const ContainerInput = styled.View`
  height: 40px;
  margin-bottom: 10px;
  margin: 20px;
`;

export const TextInputComponent = styled(TextInput)`
  height: 40px;
  border: 1px;
  border-radius: 5px;
  padding: 10px;
  border-color: ${({ theme }) => theme.colors.border_color};
  background-color: ${({ theme }) => theme.colors.input_background};
  color: ${({ theme }) => theme.colors.text_color};
  font_size: ${({ theme }) => theme.font_size.md}px;
`;

export const Label = styled.Text`
  font_size: ${({ theme }) => theme.font_size.lg}px;
  font_family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.text_color};
`;
