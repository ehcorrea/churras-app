import { forwardRef, useRef, useState } from 'react';
import Icon from '@expo/vector-icons/FontAwesome6';
import { useTheme } from 'styled-components/native';
import {
  TextInput as TextInputRN,
  TextInputProps as TextInputRNProps,
  TouchableOpacity,
  ViewProps,
} from 'react-native';

import { Spancing } from '../Spacing/Spacing';
import { Text, TextProps } from '../Text/Text';

import * as S from './Input.styles';

export type TextInputProps = {
  containerProps?: ViewProps;
  error?: string;
  label: string;
  labelProps?: TextProps;
  variant?: 'default' | 'password';
} & TextInputRNProps;

type GetInputStateParams = {
  hasError: boolean;
  hasFocus: boolean;
};

const getInputState = ({
  hasError,
  hasFocus,
}: GetInputStateParams): S.InputState => {
  if (hasError) {
    return 'error';
  }
  if (hasFocus) {
    return 'focused';
  }
  return 'default';
};

export const TextInput = forwardRef<TextInputRN, TextInputProps>(
  (
    {
      containerProps,
      defaultValue,
      error,
      label,
      labelProps,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<TextInputRN>(null);
    const theme = useTheme();
    const [hasFocus, setHasFocus] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(
      variant === 'password'
    );

    const handlePressContainer = () => {
      inputRef.current?.focus();
    };

    const handleSecureText = () => {
      setSecureTextEntry((prevState) => !prevState);
    };

    return (
      <TouchableOpacity onPress={handlePressContainer} className="w-full">
        <Text pallet="gray" {...labelProps}>
          {label}
        </Text>
        <Spancing y={5} />
        <S.Container
          state={getInputState({ hasError: !!error, hasFocus })}
          {...containerProps}
        >
          <S.Input
            {...props}
            ref={ref || inputRef}
            secureTextEntry={secureTextEntry}
            onFocus={(e) => {
              setHasFocus(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setHasFocus(false);
              props.onBlur?.(e);
            }}
          />
          {variant === 'password' && (
            <TouchableOpacity
              onPress={handleSecureText}
              accessibilityLabel={
                secureTextEntry ? 'mostrar senha' : 'esconder senha'
              }
            >
              <Icon
                color={theme.colors.primary.main}
                name={secureTextEntry ? 'eye-slash' : 'eye'}
                size={theme.rfvalue(18)}
              />
            </TouchableOpacity>
          )}
        </S.Container>
        <Spancing y={5} />
        <Text pallet="error">{error}</Text>
        <Spancing y={5} />
      </TouchableOpacity>
    );
  }
);

export default TextInput;
