import { HiOutlinePlayCircle } from "react-icons/hi2";
import { GoClock } from "react-icons/go";

/* eslint-disable react/prop-types */
function Episode({ episode, idx }) {
  return (
    <div className="flex items-center gap-[18px] border-t border-black-shade-5 pb-10 pt-[30px] max-md:pb-[30px] max-md:pt-[20px] max-sm:flex-col">
      <div className="flex items-center gap-[18px] max-sm:w-full max-sm:flex-row-reverse">
        <p className="text-2xl font-semibold max-md:text-lg max-sm:text-2xl">
          {idx >= 9 ? idx + 1 : `0${idx + 1}`}
        </p>
        <div className="relative h-[118px] w-[172px] cursor-pointer max-md:h-[100px] max-md:w-[140px] max-sm:w-full">
          <img
            src={`https://image.tmdb.org/t/p/w500${episode?.still_path}`}
            className="h-full w-full rounded-xl brightness-50"
          />
          <div className="absolute left-[50%] top-[50%] flex h-[50px] w-[50px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[67px] bg-[#00000060] text-white">
            <HiOutlinePlayCircle className="h-[30px] w-[30px]" />
          </div>
        </div>
      </div>
      <div className="h-[115px] flex-1 overflow-hidden max-sm:w-full">
        <div className="flex justify-between max-sm:flex-col-reverse">
          <p className="text-lg font-semibold text-white max-md:text-lg">
            {episode?.name}
          </p>
          <span className="mb-2.5 flex h-[33px] w-20 items-center justify-center gap-1 rounded-md border border-black-shade-5 bg-black-shade-2 text-sm font-medium">
            <GoClock className="h-[15px] w-[15px]" />
            <p>{episode.runtime} min</p>
          </span>
        </div>
        <p className="h-[72px] overflow-hidden text-ellipsis max-md:text-sm max-sm:hidden">
          {episode?.overview}
        </p>
      </div>
    </div>
  );
}

export default Episode;
