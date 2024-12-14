import { useMovieShow } from "./useMovieShow";

function MovieDescription() {
  const { data } = useMovieShow();
  return (
    <>
      <div className="flex flex-col gap-2.5 rounded-[10px] border border-black-shade-5 bg-black-shade-3 p-10 max-sm:p-6">
        <p className="font-medium">Description</p>
        <p className="overflow-hidden text-ellipsis font-medium text-white">
          {data?.overview}
        </p>
      </div>
    </>
  );
}

export default MovieDescription;
