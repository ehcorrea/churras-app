import { Fontisto } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

type ContainerProps = {
  width: number;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ theme, width }) => css`
    background-color: ${theme.colors.white.main};
    border-radius: ${theme.rfvalue(10)}px;
    justify-content: center;
    overflow: hidden;
    width: ${width / 1.3}px;
  `}
`;

export const ImageContainer = styled.ImageBackground.attrs((attr) => ({
  contentFit: 'cover',
  ...attr,
}))<ContainerProps>`
  ${({ theme, width }) => css`
    align-items: flex-start;
    height: ${width / 3}px;
    padding: ${theme.rwvalue(10)}px;
  `}
`;

export const Badge = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white.main};
    border-radius: 999px;
    flex-direction: row;
    padding: ${theme.rwvalue(8)}px;
  `}
`;

export const IconInfo = styled(Fontisto).attrs(({ theme }) => ({
  size: theme.rfvalue(13),
  color: theme.colors.primary[50],
}))``;
