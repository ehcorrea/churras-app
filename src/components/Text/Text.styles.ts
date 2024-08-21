import { Color, FontSize, FontWeight, Pallet } from '@/types/theme';
import styled, { css } from 'styled-components/native';

export type TextProps = {
  color?: Color;
  pallet?: Pallet;
  size?: FontSize;
  weight?: FontWeight;
};

export const Text = styled.Text<TextProps>`
  ${({
    theme,
    color = 'main',
    pallet = 'black',
    size = 'medium',
    weight = 'regular',
  }) => css`
    color: ${theme.colors[pallet][color]};
    font-family: ${theme.font.weight[weight]};
    font-size: ${theme.font.size[size]}px;
  `}
`;
