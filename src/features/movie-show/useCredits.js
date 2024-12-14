import { useQuery } from "@tanstack/react-query";
import { getMovieCredits, getShowCredits } from "../../services/apiCredits";
import { useParams } from "react-router-dom";

function useCredits() {
  const typeIsMovie = window.location.href.includes("movie");
  const id = useParams()?.id;

  const { data, refetch } = useQuery({
    queryKey: ["credits"],
    queryFn: async () => {
      const data = typeIsMovie
        ? await getMovieCredits(id)
        : await getShowCredits(id);
      return data;
    },
    staleTime: 0,
  });

  return { data, refetch };
}

export { useCredits };
