import { TouchableOpacityProps } from 'react-native';

import * as S from './Button.styles';

export type ButtonProps = { children?: string } & Partial<S.ButtonProps> &
  TouchableOpacityProps;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <S.Button {...props}>
      <S.Label>{children}</S.Label>
    </S.Button>
  );
}
