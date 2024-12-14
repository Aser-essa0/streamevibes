import { useQuery } from "@tanstack/react-query";
import { getShows } from "../../services/apiShows";

function useShowsData() {
  const { data, isLoading } = useQuery({
    queryKey: ["Shows"],
    queryFn: getShows,
  });

  return { data, isLoading };
}

export default useShowsData;
