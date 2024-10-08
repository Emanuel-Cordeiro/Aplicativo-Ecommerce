import styled from 'styled-components/native';

export const ContainerForm = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.application_background};
`;

export const Title = styled.Text`
  font-size: 60px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_color};
  font-family: ${({ theme }) => theme.font_family.bold};
`;

export const SubTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_color};
  font-family: ${({ theme }) => theme.font_family.bold};
`;
