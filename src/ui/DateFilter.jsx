import { HiCalendarDays } from "react-icons/hi2";
import DateSingleFilter from "./DateSingleFilter";
import { getFormatedCurDate, pastSevenDays } from "../utils/helpers";

function DateFilter({ setDate, date }) {
  const sortedPastSevenDays = pastSevenDays.sort((a, b) => a - b);

  return (
    <div className="px-8 bg-white rounded-md flex items-center justify-between">
      <p className="flex items-center justify-center gap-2">
        <HiCalendarDays className="text-xl" />
        {getFormatedCurDate(date)}
      </p>

      <div className="flex items-center gap-4">
        {sortedPastSevenDays.map((date, i) => (
          <DateSingleFilter key={i} date={date} setDate={setDate} />
        ))}
        {/* <DateButton>
          <span className="block opacity-70 italic">Mon</span>
          <span className="block text-xl font-extrabold">18</span>
        </DateButton>
        <DateButton>
          <span className="block opacity-70 italic">Tue</span>
          <span className="block text-xl font-extrabold">19</span>
        </DateButton>
        <DateButton>
          <span className="block opacity-70 italic">Wed</span>
          <span className="block text-xl font-extrabold">20</span>
        </DateButton>
        <DateButton>
          <span className="block opacity-70 italic">Thu</span>
          <span className="block text-xl font-extrabold">21</span>
        </DateButton>
        <DateButton>
          <span className="block opacity-70 italic">Fri</span>
          <span className="block text-xl font-extrabold">22</span>
        </DateButton>
        <DateButton>
          <span className="block opacity-70 italic">Today</span>
          <span className="block text-xl font-extrabold">23</span>
        </DateButton> */}
      </div>
    </div>
  );
}

export default DateFilter;
