import styled, { css } from 'styled-components/native';
import { WeekCalendar } from 'react-native-calendars';

export const Container = styled.View`
  ${({ theme }) => css`
    min-width: 1px;
    min-height: ${theme.rhvalue(50)}px;
  `}
`;

export const Calendar = styled(WeekCalendar).attrs(({ theme, ...props }) => ({
  ...props,
  theme: {
    dotColor: theme.colors.primary.main,
    selectedDayBackgroundColor: theme.colors.primary[50],
    textDayFontWeight: '500',
    textDayHeaderFontFamily: theme.font.weight.bold,
    textMonthFontFamily: theme.font.weight.regular,
    todayTextColor: theme.colors.primary.main,
  } as never,
  allowShadow: false,
  arrowColor: theme.colors.primary.main,
}))``;
