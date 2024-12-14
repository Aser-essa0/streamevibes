import { memo } from "react";
import { useMoviesData } from "../features/moviesAndShows/useMoviesData";
import Skeleton from "react-loading-skeleton";

const HeroBackground = memo(function HeroBackground() {
  const { data } = useMoviesData();
  const array = Array.from({ length: 36 }, (num) => num++);

  return (
    <div className="absolute left-0 top-0 z-[-1] grid h-[699px] w-full grid-cols-9 gap-2.5 overflow-hidden filter max-sm:h-[500px] max-sm:grid-cols-3">
      {data
        ? data?.slice(0, 36)?.map((img) => {
            if (img?.poster_path)
              return (
                <>
                  {
                    <img
                      key={img?.poster_path}
                      src={`https://image.tmdb.org/t/p/w500${img?.poster_path}`}
                      height={200}
                      width={160.11}
                      className="z-[-100] h-[200px] w-[160.11px] rounded-xl"
                    />
                  }
                </>
              );
          })
        : array.map((el, idx) => {
            return <Skeleton key={idx} width={"100%"} height={200} />;
          })}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-[#141414] to-[#14141400]"></div>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#141414] to-[#14141400]"></div>
    </div>
  );
});

export default HeroBackground;
