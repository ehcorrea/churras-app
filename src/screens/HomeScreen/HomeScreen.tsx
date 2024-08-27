import { useRef } from 'react';
import { Platform, View } from 'react-native';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
  useForeground,
} from 'react-native-google-mobile-ads';

import { Calendar, HeaderUser, Spancing, Text } from '@/components';

export function HomeScreen() {
  const bannerRef = useRef<BannerAd>(null);
  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  });

  return (
    <View style={{ backgroundColor: '#FFFFFFFF', flex: 1 }}>
      <HeaderUser />
      <BannerAd
        ref={bannerRef}
        size={BannerAdSize.FULL_BANNER}
        unitId={TestIds.ADAPTIVE_BANNER}
      />
      <Spancing y={10} />
      <Text.Subtitle className="px-[5%]">Próximos churras</Text.Subtitle>
      <Calendar />
    </View>
  );
}
