import { useEffect, useState } from "react";
import { GetMovies } from "../containers/MovieBulider";
import Movie from "./Movie";

const SimilarMovies = ({ movie }) => {
  const allMovies = GetMovies();

  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    if (!movie || !allMovies.length) {
      setSimilarMovies([]);
      return;
    }

    const currentMovieGenreIds = movie.genre_ids;

    const foundSimilar = allMovies.filter((otherMovie) => {
      /* remove the same movie */
      if (otherMovie.id === movie.id) {
        return false;
      }

      return currentMovieGenreIds.some((genreId) =>
        otherMovie.genre_ids.includes(genreId)
      );
    });
    setSimilarMovies(foundSimilar);
  }, [movie, allMovies]);

  return (
    <>
      <h3 className="mt-5 font-semibold">Similar Movies</h3>
      <div className="grid grid-cols-2">
        {similarMovies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default SimilarMovies;
