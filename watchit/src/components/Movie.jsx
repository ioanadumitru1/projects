const Movie = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => onMovieClick(movie)}
      className="min-w-fit w-48 h-64 md:w-3xs md:h-80 lg:h-96 cursor-pointer border flex flex-col justify-end m-2 p-6 rounded-lg hover:scale-105 hover:shadow-lg hover:opacity-80 transition-all duration-300"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie.poster_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default Movie;
