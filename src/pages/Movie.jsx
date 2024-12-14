import MovieShowBanner from "../features/movie-show/MovieShowBanner.jsx";
import MovieShowDetails from "../features/movie-show/MovieShowDetails.jsx";
import Cast from "../features/movie-show/Cast.jsx";
import Details from "../features/movie-show/Details.jsx";
import MovieShowDescription from "../features/movie-show/MovieShowDescription.jsx";
import Reviews from "../features/movie-show/Reviews.jsx";
import Spinner from "../ui/Spinner.jsx";
import { useMovieShow } from "../features/movie-show/useMovieShow.js";
import { useEffect } from "react";

export default function Movie() {
  const { isFetching, refetch } = useMovieShow();
  useEffect(() => {
    refetch();
  }, []);

  if (isFetching) return <Spinner />;

  return (
    <>
      <MovieShowBanner />
      <MovieShowDetails>
        <MovieShowDescription />
        <Details />
        <Cast />
        <Reviews />
      </MovieShowDetails>
    </>
  );
}
