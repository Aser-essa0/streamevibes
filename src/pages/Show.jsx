import MovieShowBanner from "../features/movie-show/MovieShowBanner.jsx";
import MovieShowDetails from "../features/movie-show/MovieShowDetails.jsx";
import Cast from "../features/movie-show/Cast.jsx";
import Details from "../features/movie-show/Details.jsx";
import MovieShowDescription from "../features/movie-show/MovieShowDescription.jsx";
import Reviews from "../features/movie-show/Reviews.jsx";
import SeasonsAndEpisodes from "../features/movie-show/SeasonsAndEpisodes.jsx";
import { useMovieShow } from "../features/movie-show/useMovieShow.js";
import { useEffect } from "react";
import Spinner from "../ui/Spinner.jsx";

function Show() {
  const { isFetching, refetch } = useMovieShow();
  useEffect(() => {
    refetch();
  }, []);

  if (isFetching) return <Spinner />;

  return (
    <>
      <MovieShowBanner />
      <MovieShowDetails>
        <SeasonsAndEpisodes />
        <Details />
        <MovieShowDescription />
        <Cast />
        <Reviews />
      </MovieShowDetails>
    </>
  );
}

export default Show;
