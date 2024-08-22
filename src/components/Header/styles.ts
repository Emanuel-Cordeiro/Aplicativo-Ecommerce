import styled from 'styled-components/native';

export const ContainerHeader = styled.View`
  width: 100%;
  height: 100px;
  background-color: #333333;
  align-items: center;
  justify-content: center;
`;

export const TitleHeader = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: 50px;
  font-family: ${({ theme }) => theme.font_family.bold};
`;

export const SubtitleHeader = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: ${({ theme }) => theme.font_size.lg}px;
  font-family: ${({ theme }) => theme.font_family.bold};
`;
