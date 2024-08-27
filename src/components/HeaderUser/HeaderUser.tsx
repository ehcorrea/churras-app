import { TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { authStore } from '@/stores/authStore';
import { theme } from '@/constants';

import * as S from './HeaderUser.styles';

export function HeaderUser() {
  const { auth } = authStore();

  return (
    <S.Container>
      <View className="flex-row items-center">
        <S.UserImage source={auth?.user.foto} />
        <View>
          <S.Text palette="gray">Bem-vindo</S.Text>
          <S.Text palette="primary" size="large">
            {auth?.user.nome}
          </S.Text>
        </View>
      </View>
      <TouchableOpacity>
        <Ionicons
          name="notifications-outline"
          size={theme.font.size.xlarge}
          color="black"
        />
      </TouchableOpacity>
    </S.Container>
  );
}
