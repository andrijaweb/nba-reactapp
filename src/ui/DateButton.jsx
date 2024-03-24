function DateButton({ children }) {
  return (
    <button className="text-center py-2 px-2 transition-all duration-300 border-b-4 border-transparent hover:border-stone-900">
      {children}
    </button>
  );
}

export default DateButton;
