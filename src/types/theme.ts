import { theme } from '@/constants';

export type Palette = keyof typeof theme.colors;
export type Color = keyof typeof theme.colors.primary;
export type FontSize = keyof typeof theme.font.size;
export type FontWeight = keyof typeof theme.font.weight;
