import { formatDate } from "../utils/helpers";

function DateButton({ children, setDate, date }) {
  return (
    <button
      onClick={() => setDate(formatDate(date))}
      className="text-center py-2 px-2 transition-all duration-300 border-b-4 border-transparent hover:border-stone-900"
    >
      {children}
    </button>
  );
}

export default DateButton;
