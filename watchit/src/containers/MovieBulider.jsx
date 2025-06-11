import { useState, useEffect } from "react";
import {
  getGenres,
  getDiscoverMovies,
  getPopularMovies,
  getTopRated,
  getUpcoming,
} from "../API";
import Movies from "../components/ListMovies";

export function DiscoverMovies({onMovieClick}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesResponse = await getDiscoverMovies();
        setMovies(moviesResponse.results || []);
      } catch (error) {
        console.log("Error in fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return <Movies movies={movies} onMovieClick={onMovieClick} />;
}

export function PopularMovies({onMovieClick}) {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const popularMoviesResponse = await getPopularMovies();
        setPopularMovies(popularMoviesResponse.results || []);
      } catch (error) {
        console.log("Couldnt fetch the popular movies. Error: ", error);
      }
    };

    fetchPopularMovies();
  }, []);

  return <Movies movies={popularMovies} onMovieClick={onMovieClick} />;
}

export function TopRated({onMovieClick}) {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const topRatedResponse = await getTopRated();
        setTopRated(topRatedResponse.results || []);
      } catch (error) {
        console.log("Couldnt fetch the popular movies. Error: ", error);
      }
    };

    fetchTopRated();
  }, []);

  return <Movies movies={topRated} onMovieClick={onMovieClick} />;
}

export function Upcoming({onMovieClick}) {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        const topRatedResponse = await getUpcoming();
        setUpcoming(topRatedResponse.results || []);
      } catch (error) {
        console.log("Couldnt fetch the popular movies. Error: ", error);
      }
    };

    fetchUpcoming();
  }, []);

  return <Movies movies={upcoming} onMovieClick={onMovieClick} />;
}

export function Genres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genresResponse = await getGenres();
        setGenres(genresResponse || []);
      } catch (error) {
        console.log("Error in fetching genres: ", error);
      }
    };
    fetchGenres();
  }, []);
  return genres;
}

export function GetMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const discoverMovies = await getDiscoverMovies();
        const popularMovies = await getPopularMovies();
        const upcomingMovies = await getUpcoming();
        const topRated = await getTopRated();
        let moviesResponse = discoverMovies.results
          .concat(popularMovies.results)
          .concat(topRated.results)
          .concat(upcomingMovies.results);

        /* deduplicate same movies */
        const uniqueMovies = Array.from(
          new Map(moviesResponse.map((movie) => [movie.id, movie])).values()
        );
        setMovies(uniqueMovies || []);
      } catch (error) {
        console.log("Error in fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return movies;
}
