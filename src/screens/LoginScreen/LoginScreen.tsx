import { ScrollView, View } from 'react-native';

import { Button, Input, Line, Spancing, Text } from '@/components';

import * as S from './LoginScreen.styles';

export function LoginScreen() {
  return (
    <>
      <S.Header />
      <ScrollView className="flex-1" contentContainerStyle={{ padding: '5%' }}>
        <Text.Title size="xhuge">Entrar</Text.Title>
        <Spancing y={15} />
        <Input label="Email" />
        <Input label="Senha" variant="password" />
        <Spancing y={5} />
        <Text palette="primary" className="self-center">
          Esqueceu sua senha?
        </Text>
        <Spancing y={15} />
        <Button elevation className="w-[60%] self-center">
          ENTRAR
        </Button>
        <Spancing y={15} />
        <View className="flex-row self-center">
          <S.Label>Não tem uma conta?</S.Label>
          <Spancing x={3} />
          <Text palette="primary">Criar</Text>
        </View>
        <Spancing y={20} />
        <View className="flex-row flex-1 items-center">
          <Line />
          <Spancing x={13} />
          <S.Label>Entrar com</S.Label>
          <Spancing x={13} />
          <Line />
        </View>
        <Spancing y={10} />
        <View className="flex-row">
          <Button.Account />
          <Spancing x={10} />
          <Button.Account variant="google" />
        </View>
      </ScrollView>
    </>
  );
}
