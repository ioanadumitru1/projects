import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGMyY2I2YTI1MmFhNGVmOTUzOWZhMjVlOWNjYWU2YSIsIm5iZiI6MTc0ODE4NTk2NC4zMDA5OTk5LCJzdWIiOiI2ODMzMzM2YzczZmMzYTA5MzliNmIzODkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.InaA9i5ER-auhM4saZjS194W6c7IKhpOjY0KU9eYKG0",
  },
};

export async function getDiscoverMovies() {
  try {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    );
    const data = await fetchData.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getPopularMovies() {
  try {
    const fetchPopularMovies = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const data = await fetchPopularMovies.json();
    return data;
  } catch (error) {
    console.log("Coudnt fetch popular movies, Error: ", error);
    return null;
  }
}

export async function getTopRated() {
  try {
    const fetchTopRated = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const data = await fetchTopRated.json();
    return data;
  } catch (error) {
    console.log("Coudnt fetch top rated movies, Error: ", error);
    return null;
  }
}

export async function getUpcoming() {
  try {
    const fetchUpcoming = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );
    const data = await fetchUpcoming.json();
    return data;
  } catch (error) {
    console.log("Coudnt fetch upcoming movies, Error: ", error);
    return null;
  }
}

export const getGenres = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGMyY2I2YTI1MmFhNGVmOTUzOWZhMjVlOWNjYWU2YSIsIm5iZiI6MTc0ODE4NTk2NC4zMDA5OTk5LCJzdWIiOiI2ODMzMzM2YzczZmMzYTA5MzliNmIzODkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.InaA9i5ER-auhM4saZjS194W6c7IKhpOjY0KU9eYKG0",
        },
      }
    );
    return response.data.genres;
  } catch (error) {
    console.error("Error fetching data:", error);
    return;
  }
};
