import { TouchableOpacityProps } from 'react-native';

import { TextProps } from '../Text/Text';

import * as S from './Button.styles';

export type ButtonProps = {
  children?: string;
  icon?: React.ReactElement;
  label?: TextProps;
} & Partial<S.ButtonProps> &
  TouchableOpacityProps;

export function Button({ children, label, icon, ...props }: ButtonProps) {
  return (
    <S.Button {...props}>
      {icon}
      <S.Label {...label}>{children}</S.Label>
    </S.Button>
  );
}
