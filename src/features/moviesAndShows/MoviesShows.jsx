import { useState } from "react";
import useWidth from "../../hooks/useWidth";
import useShowsData from "./useShowsData";
import { useMoviesData } from "./useMoviesData";
import MoviesAndShowsTable from "./MoviesAndShowsTable";

function MoviesShows() {
  const [plan, setPlan] = useState("movies");
  const width = useWidth();

  let { data: moviesData, isLoading: isLoadingMovie } = useMoviesData();
  let { data: showsData, isLoading: isLoadingShow } = useShowsData();

  moviesData = moviesData?.filter((el) => el?.poster_path != undefined);
  showsData = showsData?.filter((el) => el?.poster_path != undefined);

  console.log(isLoadingMovie || isLoadingShow, "DDDDDFGGGGGGGGGGGGGT");

  return (
    <>
      {(plan === "movies" || width > 768) && (
        <MoviesAndShowsTable
          type="movie"
          data={moviesData}
          plan={plan}
          setPlan={setPlan}
          isLoading={isLoadingMovie || isLoadingShow}
        />
      )}
      {(plan === "shows" || width > 768) && (
        <MoviesAndShowsTable
          type="show"
          data={showsData}
          plan={plan}
          setPlan={setPlan}
          isLoading={isLoadingMovie || isLoadingShow}
        />
      )}
    </>
  );
}

export default MoviesShows;
