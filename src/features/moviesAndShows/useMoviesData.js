import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../services/apiMovies";

function useMoviesData() {
  const { data, isLoading } = useQuery({
    queryKey: ["Movies"],
    queryFn: getMovies,
  });

  return { data, isLoading };
}

export { useMoviesData };
