import {
  DiscoverMovies,
  PopularMovies,
  TopRated,
  Upcoming,
} from "../containers/MovieBulider";

const MainPage = ({onMovieClick}) => {
  return (
    <div className="ml-10">
      <h2 className="text-4xl font-bold pb-2">Discover</h2>
      <DiscoverMovies onMovieClick={onMovieClick} />
      <h2 className="text-4xl font-bold pb-2">Popular</h2>
      <PopularMovies onMovieClick={onMovieClick} />
      <h2 className="text-4xl font-bold pb-2">Top Rated</h2>
      <TopRated onMovieClick={onMovieClick} />
      <h2 className="text-4xl font-bold pb-2">Upcoming</h2>
      <Upcoming onMovieClick={onMovieClick} />
    </div>
  );
};

export default MainPage;
