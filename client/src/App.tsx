import { Button } from "./component/Button";
import { Input } from "./component/Input";
import "./App.css";
import { useState } from "react";
import process from "process";
import.meta.env;

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearchMovie = () => {
    fetch(
      `http://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_API_KEY_API
      }&s=${search}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Erreur réseau");
        }
      })
      .then((data) => {
        console.log(data); // Affiche les informations sur les films dans la console
        setMovies(data.Search);
      })
      .catch((error) => {
        console.error("Erreur:", error);
      });
  };
  console.log(movies, "movies");
  return (
    <>
      <header>
        <div className="container-search">
          <Input
            value={search}
            className="input-text"
            placeholder="Recherche un film ou série"
            type="text"
            onChange={(e: any) => setSearch(e.target.value)}
          />
          <Button onClick={handleSearchMovie} />
        </div>
      </header>
      <div className="container-movies">
        {movies &&
          movies.map((movie: any) => (
            <>
              <img src={movie.Poster} alt={movie.Title} />
              <div> Titre : {movie.Title} </div>
              <div> Année : {movie.Year} </div>
            </>
          ))}
      </div>
    </>
  );
}

export default App;
