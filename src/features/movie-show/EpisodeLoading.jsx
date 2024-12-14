import Skeleton from "react-loading-skeleton";
import { HiOutlinePlayCircle } from "react-icons/hi2";

// eslint-disable-next-line react/prop-types
function EpisodeLoading({ idx }) {
  return (
    <div className="flex items-center gap-[18px] border-t border-black-shade-5 pb-10 pt-[30px] max-md:pb-[30px] max-md:pt-[20px] max-sm:flex-col">
      <div className="flex items-center gap-[18px] max-sm:w-full max-sm:flex-row-reverse">
        <p className="text-2xl font-semibold max-md:text-lg max-sm:text-2xl">
          {idx >= 9 ? idx + 1 : `0${idx + 1}`}
        </p>
        <div className="relative h-[118px] w-[172px] cursor-pointer max-md:h-[100px] max-md:w-[140px] max-sm:w-full">
          <div className="h-[118px] w-[172px] rounded-xl max-sm:h-[100px] max-sm:w-[auto]">
            <Skeleton height={"100%"} width={"100%"} />
          </div>
          <div className="absolute left-[50%] top-[50%] flex h-[50px] w-[50px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[67px] bg-[#00000060] text-white">
            <HiOutlinePlayCircle className="h-[30px] w-[30px]" />
          </div>
        </div>
      </div>
      <div className="h-[115px] flex-1 overflow-hidden max-sm:w-full">
        <div className="flex items-start justify-between max-sm:flex-col-reverse">
          <div className="h-[20px] min-w-[250px] max-w-[300px] max-sm:hidden max-sm:h-auto max-sm:w-auto">
            <Skeleton width={"100%"} height={"100%"} count={1} />
          </div>
          <span className="mb-2.5 h-[33px] w-20 max-sm:hidden">
            <Skeleton width={"100%"} height={"100%"} />
          </span>
        </div>

        <div className="max-sm:hidden">
          <Skeleton width={"100%"} count={3} height={10} />
        </div>
      </div>
    </div>
  );
}

export default EpisodeLoading;
