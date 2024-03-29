import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pagesCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pagesCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center gap-8">
      <p className="opacity-70">
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pagesCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results.
      </p>
      <div className="flex gap-2">
        <button
          className="cursor-pointer p-2 bg-stone-200 rounded-md"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <HiChevronLeft className="text-2xl text-blue-500" />
        </button>
        <button
          className="cursor-pointer p-2 bg-stone-200 rounded-md"
          onClick={nextPage}
          disabled={currentPage === pagesCount}
        >
          <HiChevronRight className="text-2xl text-blue-500" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
