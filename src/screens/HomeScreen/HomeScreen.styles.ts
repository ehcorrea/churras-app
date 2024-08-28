import { FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const ArrowIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.colors.primary.main,
  size: theme.rfvalue(15),
}))``;

export const EventsList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingVertical: 10,
    paddingRight: 10,
  },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;
