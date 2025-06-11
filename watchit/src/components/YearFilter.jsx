import { useNavigate } from "react-router";

const YearFilter = () => {
  const navigate = useNavigate();

  const handleYearClick = (order) => {
    navigate("/filter", {state: {sortOrder: order}} )
  }

  return (
    <div className="dropdown relative">
      <div className="font-bold border px-4 w-fit cursor-pointer">Year</div>
      <div className="dropdown-list black w-max z-30 hidden absolute">
        <button
          onClick={() => handleYearClick("ascending")}
          className="hover:bg-zinc-900 px-2 py-1"
        >
          Oldest to newest
        </button>
        <button
          onClick={() => handleYearClick("descending")}
          className="hover:bg-zinc-900 px-2 py-1"
        >
          Newest to oldest
        </button>
      </div>

    </div>
  );
};

export default YearFilter;
