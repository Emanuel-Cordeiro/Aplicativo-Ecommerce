import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.application_background};
`;

export const ContainerAvatar = styled.View`
  height: 150px;
  width: 100%;
  margin: 50px 0;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.text_color};
`;

export const Username = styled.Text`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: ${({ theme }) => theme.font_size.xxl}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  margin-top: 10px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
`;

export const ContainerButton = styled.View`
  width: 50%;
`;
