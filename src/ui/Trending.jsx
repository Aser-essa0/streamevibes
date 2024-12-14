import { GoClockFill } from "react-icons/go";
import { IoMdEye } from "react-icons/io";
import { formatTime } from "../utils/formatTime";

// eslint-disable-next-line react/prop-types
function Trending({ runtime }) {
  return (
    <div className="col-span-2 flex w-full items-center justify-between">
      <div className="flex h-[28px] w-fit items-center gap-0.5 rounded-[51px] border border-black-shade-5 bg-black-shade-2 p-1 text-xs font-medium">
        <GoClockFill className="h-5 w-5 max-sm:h-4 max-sm:w-4 max-sm:text-xs" />
        <p>{formatTime(runtime)}</p>
      </div>
      <div className="flex h-[28px] w-[51px] items-center gap-0.5 rounded-[51px] border border-black-shade-5 bg-black-shade-2 p-1 text-xs font-medium">
        <IoMdEye className="h-5 w-5" />
        <p>{Math.floor(Math.random() * 10)}K</p>
      </div>
    </div>
  );
}

export default Trending;
