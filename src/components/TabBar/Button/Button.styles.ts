import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { Text } from '../../Text/Text';

export type TitleProps = {
  isFocused: boolean;
};

export const Icon = styled(Feather).attrs<TitleProps>(
  ({ theme, isFocused }) => ({
    size: theme.rfvalue(25),
    color: isFocused ? theme.colors.primary.main : theme.colors.black.main,
  })
)``;

export const Title = styled(Text).attrs({ size: 'small' })<TitleProps>`
  ${({ theme, isFocused }) => css`
    margin-top: ${isFocused ? 0 : theme.rhvalue(5)}px;
  `}
`;
