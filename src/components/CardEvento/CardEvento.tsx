import { Shadow } from 'react-native-shadow-2';
import { useWindowDimensions, View } from 'react-native';

import { Evento } from '@/types/evento';

import { Spancing } from '../Spacing/Spacing';
import { Text } from '../Text/Text';

import * as S from './CardEvento.styles';

export function CardEvento(props: Evento) {
  const { width } = useWindowDimensions();
  return (
    <Shadow distance={10} offset={[3, 3]} startColor="#00000006">
      <S.Container width={width}>
        <S.ImageContainer width={width} source={{ uri: props.capa }}>
          <S.Badge>
            <Text.Subtitle size="medium">{props.itens}</Text.Subtitle>
            <Spancing x={5} />
            <Text size="medium" palette="gray">
              itens
            </Text>
          </S.Badge>
        </S.ImageContainer>
        <View className="p-[5%]">
          <Text.Subtitle>{props.titulo}</Text.Subtitle>
          <Spancing y={5} />
          <View className="flex-row items-center">
            <S.IconInfo name="person" />
            <Spancing x={6} />
            <Text palette="gray" color={50}>
              {props.owner}
            </Text>
          </View>
          <Spancing y={5} />
          <View className="flex-row items-center">
            <S.IconInfo name="persons" />
            <Spancing x={4} />
            <Text palette="gray" color={50}>
              {props.convidados} convidados
            </Text>
          </View>
        </View>
      </S.Container>
    </Shadow>
  );
}
