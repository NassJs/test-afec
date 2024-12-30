import { useParams } from "react-router-dom";

export const MoviesById = () => {
  const { id } = useParams();

  const fetchMovieById = () => {
    fetch(`http://www.omdbapi.com/?apikey=5cd0eee3&i=${id}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  fetchMovieById();

  return (
    <div>
      <h1>MoviesById {id} </h1>
    </div>
  );
};
