import Movie from "../components/Movie";
import { GetMovies } from "../containers/MovieBulider";
import { useLocation } from "react-router";

const Filter = ({ onMovieClick }) => {
  const location = useLocation();

  /* Extract filters */
  const genreFilter = location.state?.filter;
  const sortOrder = location.state?.sortOrder;


  const movies = GetMovies();
  let moviesCopy = movies;

  /* Get only the movies with the specified filter if genre filter is applied */
  if (genreFilter) {
    moviesCopy = movies.filter((movie) =>
      movie.genre_ids.includes(genreFilter.id)
    );
  }

/* Sort movies if the year filter is applied */
  if (sortOrder) {
    moviesCopy = [...moviesCopy].sort((a, b) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);

      if (sortOrder === "ascending") {
        return dateA - dateB; // Oldest to newest
      } else if (sortOrder === "descending") {
        return dateB - dateA; // Newest to oldest
      }
      return 0;
    });
  }

  const displayTitle = () => {
    if (genreFilter) {
      return `Filtered by Genre: ${genreFilter.name}`;
    } else if (sortOrder) {
      return `All Movies Sorted: ${
        sortOrder === "ascending" ? "Oldest to Newest" : "Newest to Oldest"
      }`;
    }
  };


  return (
    <div className="p-4 min-w-[80vw] mt-10 mx-auto items-center modal-box rounded-xl pb-10 ">
      <h3 className="text-center text-2xl font-bold mb-6">{displayTitle()}</h3>
      <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-4">
        {moviesCopy.length > 0 ? (
          moviesCopy.map((movie) => (
            <Movie key={movie.id} movie={movie} onMovieClick={onMovieClick} />
          ))
        ) : (
          <p className="col-span-full text-center text-lg text-gray-500 mt-4">
            No movies found for this filtering.
          </p>
        )}
      </div>
    </div>
  );
};

export default Filter;
