import styled, { css } from 'styled-components/native';
import { Image, ImageProps } from 'expo-image';

import { theme } from '@/constants';
import { Color, Palette } from '@/types/theme';

import { Text } from '../Text/Text';

export type ButtonProps = {
  color?: Color;
  palette?: Palette;
  size?: keyof typeof theme.size.button;
  elevation?: boolean;
};

const buttonModifiers = {
  elevation: () => css`
    elevation: 2;
    shadow-color: #000;
    shadow-offset: 0px 3px;
    shadow-opacity: 0.1;
    shadow-radius: 5px;
  `,
};

export const Button = styled.TouchableOpacity<ButtonProps>`
  ${({
    theme,
    elevation = false,
    palette = 'primary',
    color = 'main',
    size = 'medium',
  }) => css`
    align-items: center;
    background-color: ${theme.colors[palette][color]};
    border-radius: ${theme.rfvalue(30)}px;
    height: ${theme.size.button[size]}px;
    justify-content: center;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    ${elevation && buttonModifiers.elevation()}
  `}
`;

export const Label = styled(Text.Subtitle).attrs((props) => ({
  palette: 'white',
  color: 'main',
  size: 'medium',
  ...props,
}))`
  ${({ theme }) => css`
    letter-spacing: ${theme.rfvalue(1)}px;
  `}
`;

export const IconAccount = styled(Image).attrs<ImageProps>({
  contentFit: 'contain',
})`
  ${({ theme }) => css`
    height: ${theme.rfvalue(30)}px;
    width: ${theme.rfvalue(30)}px;
  `}
`;

export const ButtonIcon = styled(Button)`
  ${({ theme }) => css`
    height: ${theme.rwvalue(38)}px;
    width: ${theme.rwvalue(38)}px;
    border-radius: ${theme.rfvalue(10)}px;
  `}
`;
