import { Card } from "../component/Card";
import.meta.env;

type MoviesProps = {
  movies: [] | undefined;
};
export const Movies = ({ movies }: MoviesProps) => {
  return (
    <div className="container-movies">
      {movies &&
        movies.map((movie: any) => (
          <Card
            title={movie.Title}
            description={movie.Year}
            image={movie.Poster}
          />
        ))}
    </div>
  );
};
