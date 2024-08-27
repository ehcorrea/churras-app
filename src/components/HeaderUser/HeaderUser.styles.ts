import { Image } from 'expo-image';
import styled, { css } from 'styled-components/native';

import { Text as TextCOMP } from '../Text/Text';

type ContainerProps = {
  top?: number;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme }) => css`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${theme.rhvalue(50)}px;
    margin: 5%;
  `}
`;

export const UserImage = styled(Image)`
  ${({ theme }) => css`
    border-radius: ${theme.rfvalue(10)}px;
    height: ${theme.rwvalue(40)}px;
    margin-right: ${theme.rwvalue(8)}px;
    width: ${theme.rwvalue(40)}px;
  `}
`;

export const Text = styled(TextCOMP)`
  ${({ theme }) => css`
    line-height: ${theme.rfvalue(18)}px;
  `}
`;
