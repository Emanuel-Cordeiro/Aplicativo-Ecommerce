import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.application_background};
`;

export const Inline = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const InlineItem = styled.View`
  width: 50%;
`;
