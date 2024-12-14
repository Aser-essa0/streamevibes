import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import useWidth from "../hooks/useWidth";

// eslint-disable-next-line react/prop-types
function ScrollController({ nextEl, prevEL, pagination }) {
  const width = useWidth();

  return (
    <>
      {width >= 768 && (
        <div className="flex h-[68px] min-w-[205px] items-center justify-between rounded-[10px] border border-black-shade-4 bg-black-shade-1 p-3 max-lg:min-w-[180px] max-lg:p-2 max-sm:hidden">
          <button
            className={`${prevEL} flex h-11 min-w-11 items-center justify-center rounded-md border border-black-shade-4 bg-black-shade-3 max-lg:h-9 max-lg:min-w-9`}
          >
            <IoArrowBack className="h-6 w-6 text-white" />
          </button>
          {width && (
            <div
              className={`${pagination} flex h-1 items-center justify-center gap-1`}
            ></div>
          )}
          <button
            className={`${nextEl} flex h-11 min-w-11 items-center justify-center rounded-md border border-black-shade-4 bg-black-shade-3 max-lg:h-9 max-lg:min-w-9`}
          >
            <IoArrowForward className="h-6 w-6 text-white" />
          </button>
        </div>
      )}
    </>
  );
}

export default ScrollController;
