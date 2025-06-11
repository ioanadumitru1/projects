import { useEffect, useState } from "react"; // Import React
import { Genres } from "../containers/MovieBulider";
import SimilarMovies from "./SimilarMovies";

export default function MovieModalBox({ movie, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const genres = Genres();

  // Effect to handle modal open/close animation
  useEffect(() => {
    setIsVisible(true);
    /* closing the modal when pressing esc */
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  if (!movie) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300
        ${
          isVisible
            ? "opacity-100 backdrop-brightness-40"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      <div
        className={`relative w-full h-full overflow-y-auto md:p-10 no-scrollbar transform transition-all duration-300
          ${isVisible ? "scale-100" : "scale-95"}
        `}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-2 sm:right-4 z-50 text-white hover:text-d4af37 focus:outline-none" // Tailwind classes for better positioning and hover
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="w-8 h-8"
          >
            <path
              fill="#d4af37"
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        </button>

        {/* Movie Details Content */}
        <div className="max-w-2xl  mx-auto modal-box rounded-xl pb-10 bg-dark-bg-main text-light-text relative z-40">
          {" "}
          <img
            src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full max-h-[400px] object-cover rounded-t-xl"
          />

          {/* Movie Details - Text */}
          <div className="my-3 px-4">
            <h2 className="text-3xl font-bold">{movie.title}</h2>
            {/* Genres */}
            <div className="flex font-semibold gap-4 text-sm mt-1">
              {" "}
              {movie.genre_ids.map((movie_genre_id) => {
                const matchedGenre = genres.find(
                  (genre) => genre.id === movie_genre_id
                );
                return matchedGenre ? (
                  <p key={matchedGenre.id}>{matchedGenre.name}</p>
                ) : null;
              })}
            </div>
            <p className="mt-2 text-base">{movie.overview}</p>{" "}
            <div className="flex justify-between mt-4">
              {" "}
              <p className="text-sm mt-1">
                Release Date:{" "}
                <span className="font-medium">{movie.release_date}</span>
              </p>
              <p className="text-sm mt-1">
                Rating:{" "}
                <span className="font-medium">
                  {movie.vote_average.toFixed(1)}
                </span>
              </p>
            </div>
            <SimilarMovies movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
}
