import { ScrollView, View } from 'react-native';

import { createAccount } from '@/services/api';
import { Spancing, Text, Input, Button, Line } from '@/components';
import { useLogin, useMutation } from '@/hooks';

import * as S from './CriarContaScreen.styles';

export function CriarContaScreen() {
  const { loginGoogle, loginEmail } = useLogin();
  const { mutate } = useMutation({
    mutationFn: createAccount,
  });

  return (
    <>
      <S.Header>
        <Button.Back />
      </S.Header>
      <ScrollView
        bounces={false}
        className="flex-1"
        contentContainerStyle={{ padding: '5%' }}
        showsVerticalScrollIndicator={false}
      >
        <Text.Title size="xhuge">Criar Conta</Text.Title>
        <Spancing y={15} />
        <Input label="Nome" placeholder="Nome Completo" />
        <Input label="Email" placeholder="exemplo@email.com" />
        <Input label="Senha" variant="password" placeholder="⦁⦁⦁⦁⦁⦁⦁" />
        <Input label="Repetir senha" variant="password" placeholder="⦁⦁⦁⦁⦁⦁⦁" />
        <Spancing y={5} />
        <Button
          elevation
          className="w-[60%] self-center"
          onPress={() =>
            mutate({
              displayName: 'placeholder-name',
              username: 'placeholder-username',
              email: 'placeholder-email',
              password: 'placeholder-password',
            })
          }
        >
          CRIAR CONTA
        </Button>
        <Spancing y={15} />
        <View className="flex-row self-center">
          <S.Label>Já tem um conta?</S.Label>
          <Spancing x={3} />
          <Text palette="primary">Entrar</Text>
        </View>
        <Spancing y={20} />
        <View className="flex-row flex-1 items-center">
          <Line />
          <Spancing x={13} />
          <S.Label>Criar com</S.Label>
          <Spancing x={13} />
          <Line />
        </View>
        <Spancing y={10} />
        <View className="flex-row">
          <Button.Account
            onPress={() =>
              loginEmail({
                identifier: 'ehcorrea96@gmail.com',
                password: 'emilio@123',
              })
            }
          />
          <Spancing x={10} />
          <Button.Account variant="google" onPress={loginGoogle} />
        </View>
      </ScrollView>
    </>
  );
}
