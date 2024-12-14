import Button from "../../ui/Button";
import { FaPlay } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { useMovieShow } from "./useMovieShow";
import { useState } from "react";

function MovieBanner() {
  const { data } = useMovieShow();

  const [like, setLike] = useState(false);

  function handleClick() {
    setLike((like) => !like);
  }

  return (
    <div className="mt-10">
      <div className="relative overflow-hidden max-sm:h-[468px]">
        <div className="relative rounded-xl">
          <img
            className="h-[709px] w-full rounded-xl"
            src={`
              https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
          />
          <div className="absolute inset-0 z-[0] h-full w-full bg-gradient-to-t from-[#141414] to-[#14141400] max-sm:hidden"></div>
          <div className="absolute left-[50%] top-[434px] flex w-[80%] translate-x-[-50%] flex-col items-center text-center max-sm:top-[276px]">
            <p className="text-center text-[30px] font-bold leading-[150%] text-white max-sm:w-[310px] max-sm:text-2xl">
              {data?.original_title || data?.original_name}
            </p>
            <p className="leading-[150%] max-sm:hidden">
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos&apos;s actions and undo the chaos to
              the universe, no matter what consequences may be in store, and no
              matter who they face... Avenge the fallen.
            </p>
            <div className="mt-6 flex items-center justify-center gap-5 max-sm:flex-col">
              <Button className="h-[52px]">
                <FaPlay className="h-6 w-6" />
                Play Now
              </Button>
              <div className="flex items-center gap-2">
                <button className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-black-shade-4 bg-black-shade-2">
                  <LuPlus className="h-6 w-6 text-white" />
                </button>
                <button
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-black-shade-4 bg-black-shade-2"
                  onClick={handleClick}
                >
                  {like ? (
                    <BiSolidLike className="h-6 w-6 text-white" />
                  ) : (
                    <BiLike className="h-6 w-6 text-white" />
                  )}
                </button>
                <button className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-black-shade-4 bg-black-shade-2">
                  <HiOutlineSpeakerWave className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieBanner;
