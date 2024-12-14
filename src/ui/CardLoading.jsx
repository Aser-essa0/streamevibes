import { useContext } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { scrollContext } from "./Scroll";
import Skeleton from "react-loading-skeleton";
import { SwiperSlide } from "swiper/react";

function CardLoading({ name }) {
  const { topTen } = useContext(scrollContext);
  return (
    <>
      <SwiperSlide className="h-fit w-[239.8px] cursor-pointer rounded-[10px] bg-black-shade-3 p-4 max-sm:p-3">
        <div className="relative grid h-fit w-full grid-cols-2 gap-[5px]">
          <div className="h-[102.5px] w-full overflow-hidden">
            <Skeleton width={"100%"} height={"100%"} />
          </div>
          <div className="absolute inset-0 h-[210.5px] w-full rounded-md bg-gradient-to-t from-[#1A1A1A] to-[#1A1A1A00]"></div>
          <div className="col-span-2 flex h-[51px] w-full items-center justify-between text-white">
            <div className="flex flex-col">
              {topTen && (
                <div className="mb-0.5 flex h-[25px] w-[66px] items-center justify-center rounded-[4px] bg-red-shade-1 text-xs font-semibold">
                  Top 10
                </div>
              )}
              <p className="font-semibold leading-[150%]">{name}</p>
            </div>
            <IoIosArrowRoundForward className="h-6 w-6" />
          </div>
        </div>
      </SwiperSlide>
    </>
  );
}

export default CardLoading;
