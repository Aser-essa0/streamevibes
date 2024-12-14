import { useContext } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { scrollContext } from "../../ui/Scroll";
import Skeleton from "react-loading-skeleton";
/* eslint-disable react/prop-types */
function MovieShowFourImgsCard({ name, data }) {
  const { topTen } = useContext(scrollContext);
  const array = Array.from({ length: 4 }, (num) => num++);
  return (
    <>
      <div className="relative grid h-fit w-full grid-cols-2 gap-[5px]">
        {data
          ? data?.map((el, idx) => {
              return (
                <img
                  key={`${el.poster_path}${idx}`}
                  src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                  height={102.5}
                  className="h-[102.5px] w-full rounded-md"
                />
              );
            })
          : array.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className="h-[102.5px] w-full overflow-hidden rounded-md"
                >
                  <Skeleton width={"100%"} height={"100%"} />
                </div>
              );
            })}
        <div className="absolute inset-0 h-[210.5px] w-full rounded-md bg-gradient-to-t from-[#1A1A1A] to-[#1A1A1A00]"></div>
        <div className="col-span-2 flex h-[51px] w-full items-center justify-between text-white">
          <div className="flex flex-col">
            {topTen && (
              <div className="mb-0.5 flex h-[25px] w-[66px] items-center justify-center rounded-[4px] bg-red-shade-1 text-xs font-semibold">
                Top 10
              </div>
            )}
            {name ? (
              <p className="font-semibold leading-[150%]">{name}</p>
            ) : (
              <Skeleton width={"90px"} height={20} />
            )}
          </div>
          <IoIosArrowRoundForward className="h-6 w-6" />
        </div>
      </div>
    </>
  );
}

export default MovieShowFourImgsCard;
