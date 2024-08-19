import styled from 'styled-components/native';

export const ContainerScroll = styled.ScrollView`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.application_background};
`;

export const SidewaysScrollView = styled.ScrollView`
  height: 120px;
  margin: 10px 10px 0;
  background-color: red;
`;

export const CategoryTitle = styled.Text`
  colors: ${({ theme }) => theme.colors.text_color};
  font-size: ${({ theme }) => theme.font_size.xs}px;
`;

export const ProductBackground = styled.View`
  background-color: #2b2b2d;
  height: 100px;
  width: 100px;
  margin: 5px;
  flex-direction: row;
`;
export const ContainerTitleProduct = styled.View`
  flex-direction: column;
`;
