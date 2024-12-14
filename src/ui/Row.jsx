import { useState } from "react";
import { HiOutlineMinusSm } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import useWidth from "../hooks/useWidth";

// eslint-disable-next-line react/prop-types
function Row({ text, num }) {
  const [open, setOpen] = useState(false);
  const width = useWidth();
  return (
    <div>
      <div className="flex h-fit max-w-[620px] gap-4 py-6 max-lg:m-auto max-lg:py-5 max-sm:px-0">
        <span className="flex h-[54px] min-w-[54px] items-center justify-center rounded-[8px] border border-black-shade-5 bg-black-shade-4 text-white max-sm:h-11 max-sm:min-w-11">
          0{num}
        </span>
        <div className="flex flex-col justify-center gap-[14px]">
          <p className="text-xl text-white max-sm:text-[17px] max-sm:font-medium">
            {text}
          </p>
          {open && (
            <p>
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
          )}
        </div>
        <div
          className={`ml-auto flex w-fit ${open ? "items-start" : "items-center"}`}
          onClick={() => setOpen((open) => !open)}
        >
          {open ? (
            <HiOutlineMinusSm className="h-6 w-6 cursor-pointer text-white" />
          ) : (
            <FiPlus className="h-6 w-6 cursor-pointer text-white" />
          )}
        </div>
      </div>
      {num !== 6 && width <= 768 && (
        <div className="line h-[1px] max-w-[620px] max-lg:m-auto"></div>
      )}
      {num !== 4 && num !== 8 && width >= 768 && (
        <div className="line h-[1px] max-w-[620px] max-lg:m-auto"></div>
      )}
    </div>
  );
}

export default Row;
