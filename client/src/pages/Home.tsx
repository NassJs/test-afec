import { useState } from "react";
import { Movies } from "../container/Movies";
import { Header } from "../component/header";
export const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<[] | undefined>([]);

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
  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        handleSearchMovie={handleSearchMovie}
      />
      <Movies movies={movies} />
    </>
  );
};
