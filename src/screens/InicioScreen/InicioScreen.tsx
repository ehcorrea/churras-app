import { View } from 'react-native';
import { ImageBackground } from 'expo-image';

import { Spancing, Text } from '@/components';

import * as S from './InicioScreen.styles';

export function InicioScreen() {
  return (
    <ImageBackground
      className="flex-1"
      contentFit="cover"
      source={require('@/assets/images/background-inicio.png')}
    >
      <S.BackgroundLinearGradient>
        <View className="flex-1">
          <View className="flex-1" />
          <View className="flex-3">
            <S.Title pallet="gray" size={300}>
              Bem-vindo ao
            </S.Title>
            <S.Title pallet="primary" size={50}>
              ChurrasApp
            </S.Title>
            <S.Subtitle>
              Onde churrasco com os amigos, {'\n'} é compromisso.
            </S.Subtitle>
          </View>
          <View className="flex-1 items-center justify-center">
            <View className="flex-row w-full items-center">
              <S.Line />
              <S.TextSocial>entrar usando</S.TextSocial>
              <S.Line />
            </View>
            <Spancing y={10} />
            <View className="flex-row">
              <S.ButtonSocial>
                <S.IconFacebook />
                <View className="flex-1 items-center">
                  <Text>FACEBOOK</Text>
                </View>
              </S.ButtonSocial>
              <Spancing x={20} />
              <S.ButtonSocial>
                <S.IconGoogle />
                <View className="flex-1 items-center">
                  <Text>GOOGLE</Text>
                </View>
              </S.ButtonSocial>
            </View>
            <Spancing y={10} />
            <S.ButtonLogin>
              <S.TextLogin>Começar com email</S.TextLogin>
            </S.ButtonLogin>
          </View>
        </View>
      </S.BackgroundLinearGradient>
      <S.Footer>
        <S.TextSignUp>Não possui uma conta?</S.TextSignUp>
        <Spancing x={2} />
        <S.TextSignUp textDecoration="underline">Criar</S.TextSignUp>
      </S.Footer>
    </ImageBackground>
  );
}
