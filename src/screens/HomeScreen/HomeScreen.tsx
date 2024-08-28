import { useRef } from 'react';
import { useTheme } from 'styled-components/native';
import {
  FlatList,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
  useForeground,
} from 'react-native-google-mobile-ads';

import { Calendar, CardEvento, Layout, Spancing, Text } from '@/components';
import { mockEventos } from '@/utils/evento/evento';

import * as S from './HomeScreen.styles';

export function HomeScreen() {
  const theme = useTheme();
  const bannerRef = useRef<BannerAd>(null);

  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  });

  return (
    <Layout>
      <ScrollView className="flex-1">
        <View className="flex-row items-center justify-between px-[5%]">
          <Text.Subtitle size="xlarge" className="leading-6">
            Próximos eventos
          </Text.Subtitle>
          <TouchableOpacity className="flex-row items-center">
            <Text palette="primary" className="leading-4">
              Ver Todos
            </Text>
            <S.ArrowIcon name="keyboard-arrow-right" />
          </TouchableOpacity>
        </View>
        <Calendar />
        <Spancing y={5} />
        <BannerAd
          ref={bannerRef}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          unitId={TestIds.ADAPTIVE_BANNER}
        />
        <Spancing y={5} />
        <View className="p-[5%]">
          <View className="flex-row items-center justify-between">
            <Text.Subtitle size="xlarge" className="leading-6">
              Ultimos realizados
            </Text.Subtitle>
            <TouchableOpacity className="flex-row items-center">
              <Text palette="primary" className="leading-4">
                Ver Todos
              </Text>
              <S.ArrowIcon name="keyboard-arrow-right" />
            </TouchableOpacity>
          </View>
          <Spancing y={5} />
          <FlatList
            contentContainerStyle={{
              paddingRight: theme.rwvalue(10),
              paddingVertical: theme.rhvalue(10),
            }}
            horizontal
            ItemSeparatorComponent={() => <Spancing x={15} />}
            showsHorizontalScrollIndicator={false}
            data={mockEventos}
            renderItem={({ item }) => <CardEvento {...item} />}
          />
        </View>
      </ScrollView>
    </Layout>
  );
}
