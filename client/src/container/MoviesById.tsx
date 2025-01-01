import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "../css/MovieById.css";

export const MoviesById = () => {
  const [movie, setMovie] = useState<any>(null);
  const { id } = useParams();

  const fetchMovieById = async () => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=5cd0eee3&i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });

    return res;
  };

  useEffect(() => {
    fetchMovieById();
  }, []);

  return (
    <>
      <Link to="/" className="back-button">
        <ArrowLeft size={20} />
        Retour à l'accueil
      </Link>

      {!movie ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-details">
          <div className="movie-poster">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="movie-info">
            <h1>{movie.Title}</h1>
            <div className="movie-meta">
              <span>{movie.Year}</span>
              <span>{movie.Runtime}</span>
              <span>{movie.Rated}</span>
            </div>
            <div className="movie-rating">
              <span className="imdb-rating">IMDb: {movie.imdbRating}</span>
            </div>
            <div className="movie-genre">{movie.Genre}</div>
            <p className="movie-plot">{movie.Plot}</p>
            <div className="movie-credits">
              <p>
                <strong>Réalisateur:</strong> {movie.Director}
              </p>
              <p>
                <strong>Acteurs:</strong> {movie.Actors}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
