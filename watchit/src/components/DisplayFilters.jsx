import GenresFilter from "./GenresFilter";
import YearFilter from "./YearFilter";

const DisplayFilters = () => {
  return (
    <div>
      <h3 className="mb-4 ml-10">Filter Movies by</h3>
      <div className="flex gap-4 ml-10">
        <GenresFilter />
        <YearFilter />
      </div>
    </div>
  );
};

export default DisplayFilters;
