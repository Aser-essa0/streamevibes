import { GoClockFill } from "react-icons/go";
import { formatTime } from "../utils/formatTime";
import Stars from "./Stars";

// eslint-disable-next-line react/prop-types
function Suggestion({ runtime, rate }) {
  return (
    <div className="col-span-2 flex w-full items-center justify-between">
      <div className="flex h-[28px] w-fit items-center gap-0.5 text-nowrap rounded-[51px] border border-black-shade-5 bg-black-shade-2 p-1 text-xs font-medium max-sm:text-[10px]">
        <GoClockFill className="h-5 w-5 max-sm:h-4 max-sm:w-4 max-sm:text-xs" />
        <p>{formatTime(runtime)}</p>
      </div>
      <div className="flex h-[28px] w-fit items-center gap-[1px] rounded-[51px] border border-black-shade-5 bg-black-shade-2 px-2.5 py-[6px] text-xs font-medium max-sm:w-[72px] max-sm:px-2">
        <Stars rate={rate} />
        <p className="ml-[3px] text-xs font-medium max-sm:text-[10px]">20K</p>
      </div>
    </div>
  );
}

export default Suggestion;
