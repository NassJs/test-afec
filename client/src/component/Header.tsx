import { Input } from "./Input";
import { Button } from "./Button";

type HeaderProps = {
  search: string;
  setSearch: (search: string) => void;
  handleSearchMovie: () => void;
};
export const Header = ({
  search,
  setSearch,
  handleSearchMovie,
}: HeaderProps) => {
  return (
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
  );
};
