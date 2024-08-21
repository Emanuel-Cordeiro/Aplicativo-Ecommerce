import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.application_background};
`;

export const SidewaysScrollView = styled.ScrollView`
  height: 150px;
  margin: 5px 5px 0 5px;
  border-radius: 5px;
  background-color: #404040;
`;

export const CategoryTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  margin-left: 3px;
  text-transform: capitalize;
`;

export const ProductBackground = styled.View`
  background-color: #2b2b2d;
  height: 120px;
  width: 110px;
  margin-left: 3px;
  border-radius: 5px;
`;

export const ContainerTitleProduct = styled.View`
  flex-direction: column;
`;

export const ContainerProducts = styled.View`
  flex-direction: row;
  display: flex;
`;
