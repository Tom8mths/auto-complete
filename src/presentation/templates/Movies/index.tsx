import Base from "../Base";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import AutoComplete from "../../components/AutoComplete";

import { httpGetMoviesNames } from "../../../infra/movies";
import { useEffect, useState } from "react";

export type MoviesTemplateProps = {
  movies: string[];
};

export default function MoviesTemplate() {
  const [moviesList, setMoviesList] = useState<string[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<string>("");

  useEffect(() => {
    async function getMovies() {
      const response = await httpGetMoviesNames();
      setMoviesList(response);
    }

    getMovies();
  }, []);

  return (
    <Base paddingTop={false}>
      <div className="flex flex-col items-center justify-center h-screen-menu w-full py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <Link to="/">
            <Button color="purple">Go back!</Button>
          </Link>
          <Text className="mt-10">Search a movie!</Text>
          <AutoComplete
            setMovie={setSelectedMovie}
            suggestions={moviesList}
          ></AutoComplete>
          <Text>{selectedMovie}</Text>
        </main>
      </div>
    </Base>
  );
}
