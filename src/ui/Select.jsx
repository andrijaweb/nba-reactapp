function Select({ options, onChange, value }) {
  return (
    <select
      className="block w-full py-2 pl-2 pr-4 rounded-md"
      onChange={onChange}
      value={value}
    >
      {options.map((option) => (
        <option value={option.value} key={option.label}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
