import Movie from "./Movie";
import {  useRef } from "react";

const ListMovies = ({ movies, onMovieClick }) => {
  const sliderRef = useRef();

  if (!movies || movies.length === 0) {
    return <p>No movies found</p>;
  }

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    /* Arrow left */
    <div className="flex items-center -ml-10 mb-2 md:mb-6 lg:mb-10">
      <button className="hidden md:block" onClick={scrollLeft}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
          className="w-8 h-8 ml-2"
        >
          <path
            fill="#d4af37"
            d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"
          />
        </svg>
      </button>
      {/* Listing the movies - scrollbar */}
      <div className="overflow-hidden relative">
        <div
          className="overflow-x-auto scroll-smooth no-scrollbar"
          ref={sliderRef}
        >
          <ul className="flex p-2">
            {movies.map((movie) => (
              <li key={movie.id}>
                <Movie movie={movie} onMovieClick={onMovieClick} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Arrow left */}
      <button onClick={scrollRight}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
          className="w-8 h-8 mr-2"
        >
          <path
            fill="#d4af37"
            d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
          />
        </svg>
      </button>

    </div>
  );
};

export default ListMovies;
