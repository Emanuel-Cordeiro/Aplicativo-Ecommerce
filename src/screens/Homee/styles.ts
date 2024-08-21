import styled from 'styled-components/native';

export const ContainerScroll = styled.ScrollView`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.application_background};
`;

export const SidewaysScrollView = styled.ScrollView`
  height: 140px;
  margin: 10px 10px 0;
  background-color: red;
`;

export const CategoryTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.bold};
`;

export const ProductBackground = styled.View`
  background-color: #2b2b2d;
  height: 110px;
  width: 110px;
  margin: 0 5px 5px;
  border-radius: 5px;
`;

export const ContainerTitleProduct = styled.View`
  flex-direction: column;
`;

export const ContainerProducts = styled.View`
  flex-direction: row;
  display: flex;
`;
