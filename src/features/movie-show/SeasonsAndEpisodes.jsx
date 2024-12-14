import SeasonList from "./SeasonList";
import { useMovieShow } from "./useMovieShow";

function SeasonsAndEpisodes() {
  const { data } = useMovieShow();

  return (
    <>
      <div className="rounded-[10px] border border-black-shade-5 bg-black-shade-3 p-[30px] max-md:p-6">
        <p className="mb-[30px] text-xl font-semibold leading-[150%] text-white">
          Seasons and Episodes
        </p>
        {data?.seasons?.map((el, idx) => {
          return <SeasonList key={`${el.id}${idx}`} season={el} idx={idx} />;
        })}
      </div>
    </>
  );
}

export default SeasonsAndEpisodes;
