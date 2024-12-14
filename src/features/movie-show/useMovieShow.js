import { useQuery } from "@tanstack/react-query";
import { getMovieData } from "../../services/apiMovies";
import { useParams } from "react-router-dom";
import { getShowData } from "../../services/apiShows";

function useMovieShow() {
  const id = useParams()?.id;
  const typeIsMovie = window.location.href.includes("movie");

  const { data, isLoading, refetch, isFetching, isStale } = useQuery({
    queryKey: ["movie-Show", id],
    queryFn: async () => {
      const data = typeIsMovie ? await getMovieData(id) : await getShowData(id);
      return data;
    },
  });

  console.log(isStale);

  return { data, isLoading, isFetching, refetch };
}

export { useMovieShow };
