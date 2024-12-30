import { Link } from "react-router-dom";
import { Card } from "../component/Card";
import.meta.env;

type MoviesProps = {
  movies: [] | undefined;
};

const handleOnClick = (id: any) => {
  console.log("click", id);
};
export const Movies = ({ movies }: MoviesProps) => {
  return (
    <div className="container-movies">
      {movies &&
        movies.map((movie: any) => (
          <Link to={`/movies/${movie.imdbID}`}>
            <Card
              onClick={() => handleOnClick(movie.imdbID)}
              key={movie.imdbID}
              title={movie.Title}
              description={movie.Year}
              image={movie.Poster}
            />
          </Link>
        ))}
    </div>
  );
};
