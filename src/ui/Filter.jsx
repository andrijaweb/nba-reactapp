import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function Filter({ filterField, options, value }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    searchParams.set("team", e.target.value);
    setSearchParams(searchParams);
  }

  return <Select value={value} options={options} onChange={handleChange} />;
}

export default Filter;
