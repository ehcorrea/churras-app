import styled from 'styled-components/native';
import { Image } from 'expo-image';

import { Text } from '@/components';

export const Header = styled(Image).attrs({
  contentFit: 'cover',
  source: require('@/assets/images/elipses.svg'),
})`
  width: 100%;
  height: ${({ theme }) => theme.rhvalue(80)}px;
`;

export const Label = styled(Text)`
  color: #5b5b5e;
`;

export const Line = styled.View`
  background-color: #b3b3b380;
  flex: 1;
  height: 1px;
`;
