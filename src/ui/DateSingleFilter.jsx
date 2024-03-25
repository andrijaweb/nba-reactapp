import { getWeekdayAndDate } from "../utils/helpers";
import DateButton from "./DateButton";

function DateSingleFilter({ date, setDate }) {
  if (!date) return;

  const { dayInMonth, dayInWeek } = getWeekdayAndDate(date);

  return (
    <DateButton setDate={setDate} date={date}>
      <span className="block opacity-70 italic">{dayInWeek}</span>
      <span className="block text-xl font-extrabold">{dayInMonth}</span>
    </DateButton>
  );
}

export default DateSingleFilter;
