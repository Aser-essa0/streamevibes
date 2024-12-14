import { useQuery } from "@tanstack/react-query";
import { getEpisodes } from "../../services/apiEpisodes";
import { useMovieShow } from "./useMovieShow";

function useEpisodes() {
  const { data } = useMovieShow();

  const id = data?.id;
  const seasonData = data?.seasons;

  let { data: episodesData, isLoading } = useQuery({
    queryKey: ["episodes", id],
    queryFn: () => getEpisodes({ id, seasonData }),
  });

  episodesData = episodesData?.slice(1);

  return { episodesData, isLoading };
}

export { useEpisodes };
