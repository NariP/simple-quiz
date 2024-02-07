import DayJS from 'dayjs';
import 'dayjs/locale/ko';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

DayJS.extend(utc);
DayJS.extend(timezone);
DayJS.locale('ko');

const date = (date?: string | number | DayJS.Dayjs | Date | null | undefined) => {
  return DayJS(date).tz('Asia/Seoul');
};

export default date;
