import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import MainPage from "./pages/MainPage";
import { ThemeProvider } from "./containers/ThemeProvider";
import Navigation from "./components/Navigation";
import LogIn from "./pages/LogIn";
import Filter from "./pages/FilterPage";
import DisplayFilters from "./components/DisplayFilters";
import MovieModalBox from "./components/MovieModalBox";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null); // State to hold the movie to display in the modal

  // Function to open the modal with a specific movie
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navigation />
        <DisplayFilters />
        <Routes>
          <Route
            path="/"
            element={<MainPage onMovieClick={handleMovieClick} />}
          />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/filter"
            element={<Filter onMovieClick={handleMovieClick} />}
          />
        </Routes>
        {/* Conditionally render the MovieModalBox if a movie is selected */}
        {selectedMovie && (
          <MovieModalBox movie={selectedMovie} onClose={handleCloseModal} />
        )}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
