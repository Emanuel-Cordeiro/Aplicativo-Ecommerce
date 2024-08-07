import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 20px 0 20px;
  margin-top: 30px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.button_text};
  font-size: ${({ theme }) => theme.font_size.xl}px;
  font-family: ${({ theme }) => theme.font_family.bold};
`;

export const ButtonComponent = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.button_background};
`;
