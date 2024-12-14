import Title from "../../ui/Title";
import Stars from "../../ui/Stars";
import { useCredits } from "./useCredits";
import { useMovieShow } from "./useMovieShow";
import { useEffect } from "react";
import MovieDetailsRow from "../../ui/MovieDetailsRow";

function Details() {
  const { data } = useMovieShow();
  const { data: creditsData, refetch } = useCredits();
  const director = creditsData?.crew?.filter((el) => el.job === "Director")[0];
  const music = creditsData?.crew?.filter((el) => el.department === "Sound")[0];

  console.log(creditsData);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <div className="row-span-3 flex h-[762px] flex-col gap-6 rounded-[10px] border border-black-shade-5 bg-black-shade-3 p-10 max-[1211px]:grid max-[1211px]:h-[auto] max-[1211px]:grid-cols-2 max-sm:h-auto max-sm:grid-cols-1 max-sm:p-6">
        <MovieDetailsRow>
          <Title>Released Year</Title>
          <p className="font-semibold text-white">
            {data?.release_date?.split("-")[0]}
          </p>
        </MovieDetailsRow>

        <MovieDetailsRow>
          <Title>Available Languages</Title>
          <div className="flex flex-wrap items-center gap-2.5">
            {data?.spoken_languages?.map((el, idx) => {
              return (
                <div
                  key={`${el.imdb_id}${idx}`}
                  className="rounded-md border border-black-shade-5 bg-black-shade-2 px-3 py-1.5 text-sm font-medium text-white"
                >
                  {el.name}
                </div>
              );
            })}
          </div>
        </MovieDetailsRow>

        <MovieDetailsRow>
          <Title>Ratings</Title>
          <div className="flex items-center gap-4">
            <div className="flex h-[77px] w-[160px] flex-col gap-1 rounded-lg border border-black-shade-5 bg-black-shade-2 p-[14px] text-white">
              <p className="font-semibold">IMDb</p>
              <div className="flex items-center gap-0.5">
                <Stars rate={data?.vote_average - 3} />
                {(data?.vote_average - 3).toFixed(1)}
              </div>
            </div>
            <div className="flex h-[77px] w-[160px] flex-col gap-1 rounded-lg border border-black-shade-5 bg-black-shade-2 p-[14px] text-white">
              <p className="font-semibold">Streamvibe</p>
              <div className="flex items-center gap-0.5">
                <Stars rate={data?.vote_average - 3.5} />
                {(data?.vote_average - 3.5).toFixed(1)}
              </div>
            </div>
          </div>
        </MovieDetailsRow>

        <MovieDetailsRow>
          <Title>Gernes</Title>
          <div className="flex flex-wrap items-center gap-2.5">
            {data?.genres?.map((el, idx) => {
              return (
                <div
                  key={`${el.imdb_id}${idx}`}
                  className="rounded-md border border-black-shade-5 bg-black-shade-2 px-3 py-1.5 text-sm font-medium text-white"
                >
                  {el.name}
                </div>
              );
            })}
          </div>
        </MovieDetailsRow>

        <MovieDetailsRow>
          <Title>Director</Title>
          <div className="flex h-[74px] max-w-[336px] items-center gap-2 rounded-lg border border-black-shade-5 bg-black-shade-2 p-3">
            <img
              src={
                director?.profile_path &&
                (director?.gender === 2 || director?.gender === 0)
                  ? `https://image.tmdb.org/t/p/w500${director?.profile_path}`
                  : "/girl-avatar.png"
              }
              className="h-[50px] w-[47.13px] rounded-md"
            />
            <div>
              <p className="font-medium text-white">{director?.name}</p>
              <Title>From US</Title>
            </div>
          </div>
        </MovieDetailsRow>

        <MovieDetailsRow>
          <Title>Music</Title>
          <div className="flex h-[74px] max-w-[336px] items-center gap-2 rounded-lg border border-black-shade-5 bg-black-shade-2 p-3">
            <img
              src={
                music?.profile_path &&
                (music?.gender === 2 || music?.gender === 0)
                  ? `https://image.tmdb.org/t/p/w500${music?.profile_path}`
                  : "/girl-avatar.png"
              }
              className="h-[50px] w-[47.13px] rounded-md"
            />
            <div>
              <p className="font-medium text-white">{music?.name}</p>
              <Title>From US</Title>
            </div>
          </div>
        </MovieDetailsRow>
      </div>
    </>
  );
}

export default Details;
