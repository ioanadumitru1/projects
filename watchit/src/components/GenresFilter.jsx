import { Genres } from "../containers/MovieBulider";
import { useNavigate } from "react-router";

const GenresFilter = () => {
  const genres = Genres();
  const navigate = useNavigate();

  const handleGenreClick = (genre) => {
    navigate("/filter", { state: { filter: genre } });
  };

  return (
    <div className="dropdown relative">
      <div className="font-bold border w-fit px-4 cursor-pointer">Genres</div>
      <div className="dropdown-list grid grid-cols-3 gap-1 black w-max z-30 hidden absolute">
        {genres.map((genre) => {
          return (
            <button
              key={genre.id}
              onClick={() => handleGenreClick(genre)}
              className="hover:bg-zinc-900 px-2 py-1"
            >
              {genre.name}
            </button>
          );
        })}
      </div>

    </div>
  );
};

export default GenresFilter;
