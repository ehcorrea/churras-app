import { CalendarProvider, WeekCalendarProps } from 'react-native-calendars';

import { setCalendarLabels } from '@/utils/calendar/labels';

import * as S from './Calendar.styles';

export function Calendar(props: WeekCalendarProps) {
  setCalendarLabels();
  return (
    <S.Container>
      <CalendarProvider date={new Date().toISOString()}>
        <S.Calendar {...props} />
      </CalendarProvider>
    </S.Container>
  );
}
