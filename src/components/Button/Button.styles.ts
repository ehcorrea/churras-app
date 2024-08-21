import { theme } from '@/constants';
import { Color, Palette } from '@/types/theme';
import styled, { css } from 'styled-components/native';
import { Text } from '../Text/Text';

export type ButtonProps = {
  color?: Color;
  palette?: Palette;
  size?: keyof typeof theme.size.button;
};

export const Button = styled.TouchableOpacity<ButtonProps>`
  ${({ theme, palette = 'primary', color = 'main', size = 'medium' }) => css`
    align-items: center;
    background-color: ${theme.colors[palette][color]};
    border-radius: ${theme.rfvalue(30)}px;
    height: ${theme.size.button[size]}px;
    justify-content: center;
    width: 100%;
  `}
`;

export const Label = styled(Text.Subtitle).attrs({ size: 'medium' })`
  ${({ theme }) => css`
    color: white;
    letter-spacing: ${theme.rfvalue(1)}px;
  `}
`;
